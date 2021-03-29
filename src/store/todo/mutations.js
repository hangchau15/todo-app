/* eslint-disable */

export default {
    login(state, token) {
        if (token) {
            state.token = token
        }
    },
    getTodos(state, todos) {
        state.todos = todos.map((todo) => {
          return {...todo}
        })
    },
}