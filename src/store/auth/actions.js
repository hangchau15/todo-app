/* eslint-disable */
import axios from 'axios'

export default {
  async register({ commit }, data) {
    try {
      await axios.post('/auth/register', {
        username: data.username,
        password: data.password
      })
      commit('register')
    } catch (error) {
      commit('register')
      throw error
    }
  },

  async login({ commit }, data) {
    try {
      const response = await axios.post('/auth/login', {
        username: data.username,
        password: data.password
      })
      const token = response.data.token
      localStorage.setItem('access_token', token)
      commit('login', token)
    } catch (error) {
      commit('login')
      throw error
    }
  },

  async logout(context) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + context.state.token
    if (context.getters.authenticated) {
      localStorage.removeItem('access_token')
      context.commit('logout')
    }
  },

  async getAllTodos(context) {
    try {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + context.state.token
      const response = await axios.get('/api/todos')
      context.commit('getAllTodos', response.data)
    } catch (error) {
      console.log(error)
    }
  },

  async storeTodo({ commit }, todo) {
    try {
      const response = await axios.post('api/todos', {
        content: todo.content
      })
      commit('storeTodo', response.data)
    } catch (error) {
      console.log(error)
    }
  },

  async updateTodo({ commit }, todo) {
    try {
      const response = await axios.put(`api/todos/${todo.id}`, {
        content: todo.content
      })
      commit('updateTodo', response.data)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteTodo({ commit }, todo) {
    try {
      await axios.delete(`api/todos/${todo.id}`)
      commit('deleteTodo', todo)
    } catch (error) {
      console.log(error)
    }
  }
}
