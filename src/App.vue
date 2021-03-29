<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
// import TodoApp from './components/TodoApp'
import Login from './components/Login'
export default {
  name: 'App',
  components: { Login }
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
