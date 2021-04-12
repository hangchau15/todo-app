export default {
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        this.$router.push({ name: 'todo' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
