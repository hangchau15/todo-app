/* eslint-disable */
import axios from 'axios'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmZjNkNzQ4LTJmZDktNGRiZC04NTIyLWYwNjQwOGQ5ODA5NyIsImlhdCI6MTYxNzA4OTUyNywiZXhwIjoxNjE3Njk0MzI3fQ.N5ZsRL8oKKuqE1jukPrzIJbCP0bJM839qgML9Mn9Clk"

export default {
  async register({ commit }, data) {
    try {
      await axios.post('/auth/register', {
        username: data.username,
        password: data.password,
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
          password: data.password,
        })
        const token = response.data.token
        commit('login', token)
      } catch (error) {
        throw error
      }
  },

  logout(context) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + context.state.token
    if (context.getters.loggedIn) {
      localStorage.removeItem('access_token')
      context.commit('logout')
    }
  },

  async getAllTodos(context) {
    try {
      const response = await axios
      .get("https://todo-mvc-api-typeorm.herokuapp.com/api/todos",{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      context.commit('getAllTodos', response.data)
    } catch (error) {
      console.log(error)
    }
  },

  async storeTodo({ commit }, todo) {
    try {
      const response = await axios
      .post("https://todo-mvc-api-typeorm.herokuapp.com/api/todos",{
        content: todo.content
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      commit('storeTodo', response.data)
    } catch (error) {
      console.log(error)
    }
  },

   editTodo(todo){
     console.log(todo.id)
    // try {
    //   const response = await axios
    //   .get(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/`+ todo.id,{
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   })
    //   commit('editTodo', response.data)
      
    // } catch (error) {
    //   console.log(error)
    // }
  },

    completedTodo({ commit }, todo) {
      
      commit('deleteTodo',todo)
      this.todo = ''
      this.isLoader = true
    },

  async deleteTodo({ commit }, todo) {
    try{
      const response = await axios.delete(`https://todo-mvc-api-typeorm.herokuapp.com/api/todos/${todo.id}`)
      commit('deleteTodo', todo)
    } catch (error) {
      console.log(error)
    }
  },
}