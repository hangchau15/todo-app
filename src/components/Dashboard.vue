<template>
  <div
    class="container col-md-6 d-flex flex-column justify-content-center mw-container"
  >
    <div class="card p-3">
      <h3 class="card-title text-center">Welcome to todo app</h3>
      <div class="container text-center">
        <router-link
          to="login"
          class=" my-3 btn btn-outline-success bg-success w-100 text-white"
          >Login</router-link
        >
        <router-link
          to="register"
          class="btn btn-outline-primary bg-primary w-100 text-white"
          >Register</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.mw-container {
  max-width: 500px;
}
</style>
