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
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',

  components: { TodoItem },

  computed: {
    ...mapGetters(['getAllTodos'])
  },

  mounted () {
    this.$store.dispatch('getAllTodos')
  }
}
</script>
