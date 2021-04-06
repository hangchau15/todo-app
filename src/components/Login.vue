<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2>Login</h2>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" v-model="usernameInput" name="username" class="form-control" :class="{ 'is-invalid': submitted && $v.usernameInput.$error }" />
                                <div v-if="submitted && !$v.usernameInput.required" class="invalid-feedback">Userame is required</div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="passwordInput" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.passwordInput.$error }" />
                                <div v-if="submitted && !$v.passwordInput.required" class="invalid-feedback">Password is required</div>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
