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
        state.loading = false
    },
    logout(state) {
        state.token = null
    },
    loading(state) {
        state.loading = true
    },
    getAllTodos(state, todos) {
        state.todos = todos.map(todo => {
            return {...todo}
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