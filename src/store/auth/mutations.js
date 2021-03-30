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
        state.todos = []
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
    editTodo(state, todo) {
        state.todoInput = todo.content
        state.selectedID = todo.id
        console.log(todo.id)
        state.isEditing = true
        return state.selectedID
    },
    completedTodo(state, todo) {
        // state.todo = todo
        state.completedTodos.push(todo)
    },
    deleteTodo(state, todo) {
        const index = state.todos.indexOf(todo)
        state.todos.splice(index, 1)
    },
}