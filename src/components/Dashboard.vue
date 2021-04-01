<template>
<div class="container col-md-6 d-flex flex-column justify-content-center max-width">
    <div class="card p-3">
        <h3 class="card-title text-center">Welcome to todo app</h3>
        <div class="container text-center">
            <router-link to="login" class=" my-3 btn btn-outline-success bg-success width text-white">Login</router-link>
            <router-link to="register" class="btn btn-outline-primary bg-primary width text-white">Register</router-link>
        </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'Dashboard',
    mounted() {
        console.log(this.$store.auth)
    }
}
</script>
<style scoped>
.width {
    width: 100%
}
.max-width {
    max-width: 500px
}
</style>