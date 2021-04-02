/* eslint-disable */

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
        state.todos = todos.map((todo) => {
          return {...todo}
        })
    },
    storeTodo(state, todo) {
        state.todos.push({
          content: todo.content,
        })
    },
    updateTodo(state, todo) {
        const index = state.todos.findIndex((t) => t.id == todo.id)
        state.todos.splice(index, 1, todo)
    },
    deleteTodo(state, todo) {
        const index = state.todos.indexOf(todo)
        state.todos.splice(index, 1)
    },
}