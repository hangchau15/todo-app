export default {
  authenticated: state => {
    return state.token !== null
  },

  isEditting: state => {
    return state.isEditting
  },

  getAllTodos: state => {
    return state.todos
  }
}
