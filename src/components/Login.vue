<template>
  <div class="container card bg-light p-5 d-flex justify-content-center align-items-center flex-column">
    <h4 class="text-center mb-4">Have an account?</h4>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="text" v-model="usernameInput" class="form-control" :class="{ 'is-invalid': submitted && $v.usernameInput.$error }" placeholder="Username"/>
        <div v-if="submitted && !$v.usernameInput.required" class="invalid-feedback">Userame is required</div>
      </div>
      <div class="form-group">
        <input type="password" v-model="passwordInput" @keyup.enter="handleSubmit()" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.passwordInput.$error }" placeholder="Password"/>
        <div v-if="submitted && !$v.passwordInput.required" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group d-flex justify-content-center">
        <button class="btn btn-success w-100 bg-success">Login</button>
      </div>
    </form>
     <div class="loader loader-default is-active"></div>
    <div
      class="loader loader-default"
      :class="{ 'is-active': isLoader }"
      data-text
    ></div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Login',

  data () {
    return {
      usernameInput: '',
      passwordInput: '',
      submitted: false,
      isLoader: this.$store.state.isLoader
    }
  },

  validations: {
    usernameInput: { required },
    passwordInput: { required }
  },

  methods: {
    handleSubmit (e) {
      this.submitted = true
      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.login()
    },

    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        alert('Login successed')
        this.$router.push({ name: 'todo' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
  .form-control, .btn {
    border-radius: 25px;
    height: 48px
  }
</style>
