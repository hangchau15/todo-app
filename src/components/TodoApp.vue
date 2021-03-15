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
    <ul class="list-group list-group-flush text-dark">
      <li v-for="(todo, index) in todos" :key="todo.index" class="list-group-item p-3 d-flex justify-content-between align-items-center">
          <div class="d-flex">
              <div class="align-item-center">
                {{ todo.content }}
              </div>
          </div>
          <div class="btn-option-div">
            <button class="btn btn-outline-info" v-on:click="editTodo(todo,index)">Edit</button>
            <button class="btn btn-outline-success" v-on:click="completeTodo(index,todo)">Complete</button>
            <button class="btn btn-outline-danger" v-on:click="deleteTodo(todo,index)">Remove</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import axios  from 'axios'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdmMjQ2Mjc2LWIxYTEtNGQzOS04YWU2LWIzZjMwODcyYTI2ZiIsImlhdCI6MTYxNTM3MjE4NCwiZXhwIjoxNjE1OTc2OTg0fQ.Tt1yBpuA5wwTq-At2cvoXBwCe3GhPZKE5nCsvUHRDgE'
export default {
  name: 'TodoApp',
  data () {
    return {
      selectedID: null,
      selectedIndex: null,
      isEditing: false,
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
      try {
        const response = await axios
        .get("https://todo-mvc-api-typeorm.herokuapp.com/api/todos",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        this.todos = response.data
      } catch (e) {
        console.error(e)
      }
    },

    async storeTodo(){
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
        res => this.todos.push(res.data)
        this.todos = this.getAllTodo()
      })
      .catch((error) => {
        console.log(error)
      })
        this.todo = ''  
        return false
      }
    },

    async editTodo(todo,index){
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
        this.selectedIndex = index
        this.isEditing = true
        return this.selectedID
      })
      .catch(function(error) {
        console.log(error)
      })
    },

    async updateTodo(){
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
        this.todos.splice(this.selectedIndex, 1, res.data)
        if (res.status === '200') {
          this.todos = this.getAllTodo()
        }
      })
      .catch(function(error) {
        console.log(error)
      })
        this.selectedIndex = null
        this.isEditing = false
        this.todo = ''
    },

    cancelUpdateTodo(){
      this.isEditing = false
      this.todo = ''
    },

    async deleteTodo(todo,index){
      await axios.delete(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${todo.id}`,
      {
      headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(()=> {
        this.todos.splice(index,1)
        this.todos = this.getAllTodo()
      })
      .catch(function(error) {
        console.log(error)
      })
    },
  }
}
</script>
