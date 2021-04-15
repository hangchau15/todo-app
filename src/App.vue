<template>
  <div id="app">
    <router-view></router-view>
    <div v-if="loading">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',

  components: { Dashboard, Loading },

  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px;
}
</style>
