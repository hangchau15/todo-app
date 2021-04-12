<template>
  <div>
    <div class="row p-3 my-3 d-flex">
      <div class="form-group">
        <input
          type="text"
          v-model="todoInput"
          @keyup.enter="handleSubmit"
          class="p-3 form-control mr-sm-2"
          :class="{ 'is-invalid': $v.todoInput.$error }"
          placeholder="Enter new todo"
        />
        <div v-if="!$v.todoInput.required" class="invalid-feedback">
          Content is required
        </div>
        <button
          class="btn btn-outline-primary bg-primary text-white mt-2"
          @click="handleSubmit"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'InputTodo',

  data () {
    return {
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
      this.storeTodo()
    },

    async storeTodo () {
      await this.$store.dispatch('storeTodo', {
        content: this.todoInput
      })
      this.todoInput = ''
      this.$v.$reset()
    }
  }
}
</script>
