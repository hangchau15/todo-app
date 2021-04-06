<template>
  <div class="container">
    <ul class="list-group list-group-flush text-white">
      <li class="p-3 d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <div v-if="!isEditting" class="align-item-center">
            {{ todo.content }}
          </div>
          <div v-else class="d-flex">
            <input class="form-control" type="text" v-model="todo.content" />
            <div class="d-flex">
              <button class="btn btn-outline-success" @click="updateTodo">
                Ok
              </button>
              <button class="btn btn-outline-danger" @click="cancel">X</button>
            </div>
          </div>
        </div>
        <div class="btn-option-div">
          <button
            :class="{ 'd-none': isEditting }"
            class="btn btn-outline-info"
            @click="editTodo(todo)"
          >
            Edit
          </button>
          <button class="btn btn-outline-danger" @click="deleteTodo">
            Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',

  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      isEditting: this.isEditting,
      todoInput: this.todoInput
    }
  },

  methods: {
    editTodo (todo) {
      this.selectedID = todo.id
      this.isEditting = true
      this.todoInput = todo.content
    },

    async deleteTodo () {
      await this.$store.dispatch('deleteTodo', this.todo)
      this.getAllTodos()
    },

    cancel () {
      this.isEditting = false
      this.todoInput = ''
    },
    async updateTodo () {
      await this.$store.dispatch('updateTodo', this.todo)
      this.isEditting = false
    },

    getAllTodos () {
      this.$store.state.todos = []
      this.$store.dispatch('getAllTodos')
    }
  }
}
</script>
