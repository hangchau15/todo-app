<template>
  <div class="container p-3 my-3 bg-dark text-white">
    <h1 class="text-center">Todo App</h1>
    <!--<button class="btn btn-success" @click="logout()">Logout</button>!-->
    <input-todo></input-todo>
    <div class="loader loader-default"></div>
    <div class="loader loader-default" v-bind:class="{'is-active': isLoader }" data-text></div>
    <h2>Todos List</h2>
    <todo-list></todo-list>
  </div>
</template>

<script>
/* eslint-disable */
import axios  from 'axios'
import InputTodo from './InputTodo.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'TodoApp',
  components: { InputTodo, TodoList},
  data () {
    return {
      isLoader: false,
    }
  },
  created() {
      this.$store.dispatch('getAllTodos')
  },
  computed: {
    getAllTodos() {
        return this.$store.state.todos
    },

    // logout() {
    //   this.$store.dispatch('logout')
    //   console.log('Logout Successed')
    //   this.$router.push({name: '/'})
    // }
  },
  
  // methods: {
  //   async editTodo(todo){
  //     await axios
  //     .get(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${todo.id}`,
  //     {
  //     headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //     .then(()=> {
  //       this.todo = todo.content
  //       this.selectedID = todo.id
  //       console.log(todo.id)
  //       this.isEditing = true
  //       return this.selectedID
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })
  //   },

  //   async updateTodo(){
  //     this.isLoader = true
  //     await axios.put(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${this.selectedID}`,
  //     {
  //       status: 'active',
  //       content: this.todo
  //     },
  //     {
  //     headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //     .then ((res) => {
  //       if (res.status === 200) {
  //         this.todos = this.getAllTodo()
  //       }
  //     })
  //     .catch(function(error) {
  //       this.isLoader = false
  //       console.log(error)
  //     })
  //       this.isEditing = false
  //       this.todo = ''
  //   },

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
