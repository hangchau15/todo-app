<template>
  <div class="container card bg-light p-5 d-flex justify-content-center align-items-center flex-column">
    <h4 class="text-center mb-4">Have an account?</h4>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="text" v-model="usernameInput" class="form-control" :class="{ 'is-invalid': submitted && $v.usernameInput.$error }" placeholder="Username"/>
        <div v-if="submitted && !$v.usernameInput.required" class="invalid-feedback">Userame is required</div>
      </div>
      <div class="form-group">
        <input type="password" v-model="passwordInput" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.passwordInput.$error }" placeholder="Password"/>
        <div v-if="submitted && !$v.passwordInput.required" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group d-flex justify-content-center">
        <button class="btn btn-success w-100 bg-success">Login</button>
      </div>
    </form>
    <div>
      <span>Don't have an account?</span>
      <router-link
        to="register"
        class="text-success"
        >Register</router-link
      >
      </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Dashboard',

  data () {
    return {
      usernameInput: '',
      passwordInput: '',
      submitted: false
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
.container {
  box-shadow: 10px grey;
}
.form-control, .btn {
  border-radius: 25px;
  height: 48px
}
</style>
