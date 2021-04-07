/* eslint-disable */
import Vue from 'vue'

export default {
    register(state){
      state.loading = false
    },

    login(state, token) {
        if (token) {
            state.token = token
        }
        else {
            alert('Login failed')
            state.loading = false
        }
        state.loading = false
    },

    logout(state) {
        state.token = null
        state.todos = null
    },

    loading(state) {
        state.loading = true
    },

    getAllTodos(state, todo) {
        const arr = todo.items
        arr.forEach(element => {
            state.todos.push(element)
        })
    },

    storeTodo(state, todo) {
        Vue.set(todo, todo.content, state.todoInput)
    },

    updateTodo(state, todo) {
        const index = state.todos.findIndex(item => {
            return (todo.id === item.id)
        })
        Vue.set(todo, index, state.todoInput)
    },
		
    deleteTodo(state, todo) {
        const index = state.todos.indexOf(todo)
        Vue.set(todo, index)
    },
}