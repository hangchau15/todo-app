import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://todo-mvc-api-typeorm.herokuapp.com'

export const store = new Vuex.Store({
  state: () => ({
    todos: [],
    token: localStorage.getItem('access_token')
  }),

  mutations: {
    register (state, token) {
      state.token = token
    },

    login (state, token) {
      state.token = token
    },

    logout (state) {
      Vue.delete(state, 'token')
      Vue.set(state, 'todos', [])
    },

    getAllTodos (state, todo) {
      const arr = todo.items
      arr.forEach(element => {
        state.todos.push(element)
      })
    },

    storeTodo (state, todo) {
      Vue.set(state.todos, state.todos.length, todo)
    },

    updateTodo (state, todo) {
      const index = state.todos.findIndex(item => {
        return todo.id === item.id
      })
      Vue.set(state.todos, index, todo)
    },

    deleteTodo (state, todo) {
      const index = state.todos.indexOf(todo)
      Vue.delete(state.todos, index)
    }
  },

  actions: {
    async register ({ commit }, data) {
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

    async login ({ commit }, data) {
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

    async logout ({ commit, state }) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
      localStorage.removeItem('access_token')
      commit('logout')
    },

    async getAllTodos ({ commit, state }) {
      try {
        Vue.set(state, 'todos', [])
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        const response = await axios.get('/api/todos')
        commit('getAllTodos', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async storeTodo ({ commit }, todo) {
      try {
        const response = await axios.post('api/todos', {
          content: todo.content
        })
        commit('storeTodo', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async updateTodo ({ commit }, { todo, content }) {
      try {
        const response = await axios.put(`api/todos/${todo.id}`, {
          content
        })
        commit('updateTodo', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteTodo ({ commit }, todo) {
      try {
        await axios.delete(`api/todos/${todo.id}`)
        commit('deleteTodo', todo)
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    getAllTodos: state => {
      return state.todos
    }
  }
})
