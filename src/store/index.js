import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://todo-mvc-api-typeorm.herokuapp.com'

export const store = new Vuex.Store({
  state: () => ({
    todos: [],
    token: '',
    loading: false
  }),

  plugins: [createPersistedState()],

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
    },

    loading (state) {
      state.loading = true
    },

    noLoading (state) {
      state.loading = false
    }
  },

  actions: {
    async register ({ commit }, data) {
      try {
        commit('loading')
        await axios.post('/auth/register', {
          username: data.username,
          password: data.password
        })
        commit('register')
        commit('noLoading')
      } catch (error) {
        commit('noLoading')
        commit('register')
        throw error
      }
    },

    async login ({ commit }, data) {
      try {
        commit('loading')
        const response = await axios.post('/auth/login', {
          username: data.username,
          password: data.password
        })
        const token = response.data.token
        commit('login', token)
        commit('noLoading')
      } catch (error) {
        commit('noLoading')
        commit('login')
        throw error
      }
    },

    async logout ({ commit, state }) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
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

    async storeTodo ({ commit, state }, todo) {
      try {
        commit('loading')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        const response = await axios.post('api/todos', {
          content: todo.content
        })
        commit('storeTodo', response.data)
        commit('noLoading')
      } catch (error) {
        commit('noLoading')
        console.log(error)
      }
    },

    async updateTodo ({ commit, state }, { todo, content }) {
      try {
        commit('loading')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        const response = await axios.put(`api/todos/${todo.id}`, {
          content
        })
        commit('updateTodo', response.data)
        commit('noLoading')
      } catch (error) {
        commit('noLoading')
        console.log(error)
      }
    },

    async deleteTodo ({ commit, state }, todo) {
      try {
        commit('loading')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        await axios.delete(`api/todos/${todo.id}`)
        commit('deleteTodo', todo)
        commit('noLoading')
      } catch (error) {
        commit('noloading')
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
