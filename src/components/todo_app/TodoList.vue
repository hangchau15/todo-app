<template>
  <div class="container">
    <ul class="list-group list-group-flush text-dark">
      <todo-item
        v-for="todo in getAllTodos"
        :key="todo.index"
        v-bind:todo="todo"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',

  components: { TodoItem },

  created () {
    this.$store.state.todos = []
    this.$store.dispatch('getAllTodos')
  },

  computed: {
    getAllTodos () {
      return this.$store.state.todos
    }
  }
}
</script>
