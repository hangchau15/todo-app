<template>
  <div
    class="container col-md-6 d-flex flex-column justify-content-center max-width"
  >
    <div class="card p-3">
      <div class="form-group my-3" :class="{ 'form-group--error': $v.usernameInput.$error }">
        <label>Username</label>
        <input
          v-model.trim="$v.usernameInput.$model"
          class="form-control"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="error" v-if="!$v.usernameInput.required">Username is required</div>
      <div class="my-3">
        <label>Password</label>
        <input
          v-model="passwordInput"
          class="form-control"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <div class="justify-content-between">
          <button class="btn btn-success" type="submit" @click="login">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate'
export default {
  name: 'Login',

  data () {
    return {
      usernameInput: '',
      passwordInput: '',
      errors: []
    }
  },

  validations: {
    usernameInput: {
      required
    },
    passwordInput: {
      required
    }
  },

  methods: {
    // validate () {
    //   if (this.usernameInput && this.usernameInput) {
    //     this.login()
    //     return true
    //   }
    //   if (!this.usernameInput) {
    //     this.errors.push('Username required')
    //   }
    //   if (!this.passwordInput) {
    //     this.errors.push('Password required')
    //   }
    // },

    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        alert('Dang nhap thanh cong')
        this.$router.push({ name: 'todo' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
