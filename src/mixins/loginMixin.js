export default {
  methods: {
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
