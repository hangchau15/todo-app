<template>
    <div class="container col-md-6">
        <ul class="nav justify-content-center">
        <li class="nav-item">
            <router-link :to="{ name: 'todo'}"
            >App</router-link
            >
        </li>
        <li class="nav-item" @click="logout()">
            <router-link :to="{ name: 'logout' }">Logout</router-link>
        </li>
        </ul>
        <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'Dasboard',
    methods: {
        logout() {
            this.$store.dispatch('logout')
            console.log('Logout Successed')
            // this.$router.push({name: ''}) //back to login/register page
        }
    }
}
</script>
<style scoped>
</style>