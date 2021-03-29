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
        <button class="btn btn-success" type="submit" @click="login">Login</button>
        <br/>

        <div class="container">
            <h3>Todo list</h3>
            <ul class="list-group list-group-flush text-dark">
                <li v-for="todo in getTodos" :key="todo.index" class="list-group-item p-3 d-flex justify-content-between align-items-center">
                    <div class="d-flex">
                        <div class="align-item-center">
                            {{ todo.content }}
                        </div>
                    </div>
                    <div class="btn-option-div">
                        <button class="btn btn-outline-info">Edit</button>
                        <button class="btn btn-outline-success">Complete</button>
                        <button class="btn btn-outline-danger">Remove</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

    export default {
        name: 'Login',
        data() {
            return {
                usernameInput: '',
                passwordInput: ''
            }
        },
        created() {
            this.$store.dispatch('getTodos')
        },
        methods: {
            async login() {
                try {
                    const response = await this.$store.dispatch('login', {
                    username: this.usernameInput,
                    password: this.passwordInput,
                    })
                    console.log('Login Success')
                } catch (error) {
                    console.log(error)
                }
            },
            getTodos() {
                return this.$store.states.todos
            }
        }
    }
</script>

<style>
</style>