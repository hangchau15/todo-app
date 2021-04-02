<template>
  <div
    class="container col-md-6 d-flex flex-column justify-content-center max-width"
  >
    <div class="card p-3">
      <div class="my-3">
        <label>Username</label>
        <input
          v-model="usernameInput"
          class="form-control"
          type="text"
          placeholder="Username"
        />
      </div>
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
          <button class="btn btn-success" type="submit" @click="register">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data () {
    return {
      usernameInput: '',
      passwordInput: ''
    }
  },

  methods: {
    async register () {
      try {
        await this.$store.dispatch('register', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        this.$router.push({ name: 'login' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
