<template>
  <div class="container">
    <ul class="list-group list-group-flush text-white">
      <li class="p-3 d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <div v-if="!isEditting" class="align-item-center">
            {{ todo.content }}
          </div>
          <div v-else class="d-flex">
            <input
              class="form-control"
              :class="{ 'is-invalid': $v.todoInput.$error }"
              type="text"
              v-model="todoInput"
              @keyup.enter="handleSubmit"
            />
            <div v-if="!$v.todoInput.required" class="invalid-feedback">
              Content is required
            </div>
            <div class="d-flex">
              <button class="btn btn-outline-success" @click="handleSubmit">
                Ok
              </button>
              <button class="btn btn-outline-danger" @click="cancel">
                Cancel
              </button>
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
import { required } from 'vuelidate/lib/validators'

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
      isEditting: false,
      todoInput: ''
    }
  },

  validations: {
    todoInput: { required }
  },

  methods: {
    handleSubmit (e) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.updateTodo()
    },

    editTodo  (todo) {
      this.isEditting = true
      this.todoInput = todo.content
    },

    async deleteTodo () {
      await this.$store.dispatch('deleteTodo', this.todo)
    },

    cancel () {
      this.isEditting = false
      this.todoInput = ''
    },

    async updateTodo () {
      await this.$store.dispatch('updateTodo', { todo: this.todo,
        content: this.todoInput
      })
      this.isEditting = false
    }
  }
}
</script>
