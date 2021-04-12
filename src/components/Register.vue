<template>
  <div class="container card bg-light p-5 d-flex justify-content-center align-items-center flex-column">
    <h4 class="text-center mb-4">Create an account</h4>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="usernameInput" name="username" class="form-control" :class="{ 'is-invalid': $v.usernameInput.$error }" placeholder="Username"/>
          <div v-if="!$v.usernameInput.required" class="invalid-feedback">Username is required</div>
        </div>
        <div class="form-group">
            <input type="password" v-model="passwordInput" @keyup.enter="handleSubmit()" name="password" class="form-control" :class="{ 'is-invalid': $v.passwordInput.$error }" placeholder="Password"/>
            <div v-if="$v.passwordInput.$error" class="invalid-feedback">
              <span v-if="!$v.passwordInput.required">Password is required</span>
              <span v-if="!$v.passwordInput.minLength">Password must be at least 6 characters</span>
            </div>
        </div>
        <div class="form-group d-flex justify-content-center">
            <button class="btn btn-primary w-100">Register</button>
        </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import loginMixin from '../mixins/loginMixin'

export default {
  name: 'Register',

  mixins: [loginMixin],

  data () {
    return {
      usernameInput: '',
      passwordInput: '',
      submitted: false
    }
  },

  validations: {
    usernameInput: { required },
    passwordInput: { required, minLength: minLength(6) }
  },

  methods: {
    handleSubmit (e) {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.register()
    },

    async register () {
      try {
        await this.$store.dispatch('register', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        alert('Register successed')
        this.login()
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
