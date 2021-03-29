/* eslint-disable */
import axios from 'axios'

export default {
  async login({ commit }, data) {
      try {
        const response = await axios.post('/auth/login', {
          username: data.username,
          password: data.password,
        })
        const token = response.data.token
        localStorage.setItem('access_token', token)
        commit('login', token)
      } catch (error) {
        throw error
      }
  },
}