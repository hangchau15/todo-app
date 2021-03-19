<template>
  <div class="container p-3 my-3 bg-dark text-white">
    <h1 class="text-center">Todo App</h1>
    <h2>New todo:</h2>
    <div v-if="!isEditing" class="row p-3 my-3 d-flex">
      <input class="col-8 p-3 form-control mr-sm-2" type="text" v-model="todo" placeholder="Enter new todo">
      <button class="btn btn-outline-primary bg-primary text-white" v-on:click="storeTodo">Add</button>
    </div>

    <div v-else class="row p-3 my-3">
      <input class="col-8 form-control mr-sm-2" type="text" v-model="todo">
      <button class="btn btn-outline-primary bg-primary text-white mr-sm-2" v-on:click="updateTodo">Update</button>
      <button class="btn btn-outline-danger bg-danger text-white" v-on:click="cancelUpdateTodo">Cancel</button>
    </div>

    <h2> Todos</h2>
    <div class="loader loader-default"></div>
    <div class="loader loader-default" v-bind:class="{'is-active': isLoader }" data-text></div>
    <ul class="list-group list-group-flush text-dark">
      <li v-for="todo in todos" :key="todo.index" class="list-group-item p-3 d-flex justify-content-between align-items-center">
          <div class="d-flex">
              <div class="align-item-center">
                {{ todo.content }}
              </div>
          </div>
          <div class="btn-option-div">
            <button class="btn btn-outline-info" v-on:click="editTodo(todo)">Edit</button>
            <button class="btn btn-outline-success" v-on:click="completedTodo(todo)">Complete</button>
            <button class="btn btn-outline-danger" v-on:click="deleteTodo(todo)">Remove</button>
          </div>
      </li>
    </ul>
    <h2 class=" my-3">Completed</h2>
    <ul class="completed-list">
      <li v-for="(todo,index) in completedTodos" :key="index">{{ todo.content }}</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import axios  from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmZjNkNzQ4LTJmZDktNGRiZC04NTIyLWYwNjQwOGQ5ODA5NyIsImlhdCI6MTYxNjA1MzU3MSwiZXhwIjoxNjE2NjU4MzcxfQ.lHONQimlOnFDreJMw7xWJTp-wcHpBh-xSjpuymYC2XY'
export default {
  name: 'TodoApp',
  data () {
    return {
      selectedID: null,
      isEditing: false,
      isLoader: false,
      todo: '',
      todos: [],
      completedTodos: [],
    }
  },
  
  created() {
    this.getAllTodo()
  },

  methods: {
    async getAllTodo() {
      this.isLoader = true
      try {
        const response = await axios
        .get("https://todo-mvc-api-typeorm.herokuapp.com/api/todos",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        this.todos = response.data
      } catch (e) {
        this.isLoader = false
        console.error(e)
      }
      this.isLoader = false
    },

    async storeTodo(){
      this.isLoader = true
      if (!this.todo) {
        alert('Không được để trống!')
      } else{
        await axios.post("https://todo-mvc-api-typeorm.herokuapp.com/api/todos",
      {
        content: this.todo
      },
      {
      headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        this.todos = this.getAllTodo()
      })
      .catch((error) => {
        this.isLoader = false
        console.log(error)
      })
        this.todo = ''  
        return false
      }
    },

    async editTodo(todo){
      await axios
      .get(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${todo.id}`,
      {
      headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(()=> {
        this.todo = todo.content
        this.selectedID = todo.id
        console.log(todo.id)
        this.isEditing = true
        return this.selectedID
      })
      .catch(function(error) {
        console.log(error)
      })
    },

    async updateTodo(){
      this.isLoader = true
      await axios.put(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${this.selectedID}`,
      {
        status: 'active',
        content: this.todo
      },
      {
      headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then ((res) => {
        if (res.status === 200) {
          this.todos = this.getAllTodo()
        }
      })
      .catch(function(error) {
        this.isLoader = false
        console.log(error)
      })
        this.isEditing = false
        this.todo = ''
    },

    cancelUpdateTodo(){
      this.isEditing = false
      this.todo = ''
    },

    completedTodo(todo) {
      this.todo = todo
      this.completedTodos.push(this.todo)
      this.todos = this.deleteTodo(todo)
      this.todo = ''
      this.isLoader = true
    },
    
    async deleteTodo(todo){
      this.isLoader = true
      await axios.delete(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${todo.id}`,
      {
      headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(()=> {
        this.todos = this.getAllTodo()
      })
      .catch(function(error) {
        this.isLoader = false
        console.log(error)
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed-list {
  list-style-type: none;
  text-decoration: line-through;
}
</style>
