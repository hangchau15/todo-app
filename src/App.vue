<template>
  <div id="app">
    <!--<login></login> !-->
    <!-- <dashboard></dashboard> !-->
    <todo-app></todo-app>
  </div>
</template>

<script>
import TodoApp from './components/todo_app/TodoApp.vue'
import Login from './components/Login.vue'
// import Dashboard from './components/todo_app/Dashboard.vue'

export default {
  name: 'App',
  components: { Login, TodoApp }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px;
}
</style>
