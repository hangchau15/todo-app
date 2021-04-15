<template>
  <div class="container p-3 my-3 bg-dark text-white">
    <h1 class="text-center">Todo App</h1>
    <button
      class=" my-3 btn btn-outline-danger bg-danger text-white"
      @click="logout"
    >
      Log out
    </button>
    <input-todo></input-todo>
    <h2>Todos List</h2>
    <todo-list></todo-list>
  </div>
</template>

<script>
import InputTodo from './InputTodo.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'TodoApp',

  components: { InputTodo, TodoList },

  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
