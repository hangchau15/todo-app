export default {
  methods: {
    data() {
      return {
        loading: false,
        isErrorLogin: false
      }
    },

    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.usernameInput,
          password: this.passwordInput
        })
        this.$router.push({ name: 'todo' })
      } catch (error) {
        this.loading = false
        this.isErrorLogin = true
        console.log(error)
      }
    }
  }
}
