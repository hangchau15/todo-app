export default {
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        this.isErrorLogin = true
        this.$router.push({ name: 'todo' })
      } catch (error) {
        this.isErrorLogin = true
        console.log(error)
      }
    }
  }
}
