<template>
<div class="container col-md-6 d-flex flex-column justify-content-center">
    <!--<div class="card p-3">
        <h3 class="card-title text-center">Welcome to todo app</h3>
        <div class="container text-center">
            <button class=" my-3 btn btn-outline-success bg-success width text-white">Login</button>
            <button class="btn btn-outline-primary bg-primary width text-white">Register</button>
        </div>
  </div> !-->
    <div>
    <router-link to="login">Login</router-link>
    <router-link to="register">Register</router-link>
    <router-view></router-view>
    </div>
</div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'Dashboard',
    
}
</script>
<style scoped>
.width {
    width: 100%
}
</style>