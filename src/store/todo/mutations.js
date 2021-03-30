/* eslint-disable */

export default {
  getAllTodos(state, todos) {
        state.todos = todos.map((todo) => {
          return {...todo}
        })
    },
}