<template>
    <div class=" container my-3">
        <div class="my-3">
            <label>Username</label>
            <input v-model="usernameInput" class="form-control" type="text" placeholder="Username"/>
        </div>
        <div class="my-3">
            <label>Password</label>
            <input v-model="passwordInput" class="form-control" type="password" placeholder="Password"/>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="justify-content-between">
                <button class="btn btn-success" type="submit" @click="register">Register</button>
            </div>
        </div>
        <br/>
    </div>
</template>

<script>
/* eslint-disable */

    export default {
        name: 'Register',
        data() {
            return {
                usernameInput: '',
                passwordInput: ''
            }
        },
        methods: {
            async register() {
                try {
                    const response = await this.$store.dispatch('register', {
                    username: this.usernameInput,
                    password: this.passwordInput,
                    })
                    console.log('Registed')
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>
</style>