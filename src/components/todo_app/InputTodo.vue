<template>
  <div>
    <div class="row p-3 my-3 d-flex">
      <input
        class="col-8 p-3 form-control mr-sm-2"
        type="text"
        v-model="todoInput"
        placeholder="Enter new todo"
      />
      <button
        class="btn btn-outline-primary bg-primary text-white"
        @click="storeTodo"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',

  data () {
    return {
      todoInput: this.$store.state.todoInput
    }
  },

  methods: {
    async storeTodo () {
      if (!this.todoInput) {
        alert('Content required')
      } else {
        await this.$store.dispatch('storeTodo', {
          content: this.todoInput
        })
        this.getAllTodos()
        this.todoInput = null
      }
    },

    getAllTodos () {
      this.$store.dispatch('getAllTodos')
    }
  }
}
</script>
