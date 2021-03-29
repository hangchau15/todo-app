/* eslint-disable */
import axios from 'axios'

export default {
  async getTodos(context) {
    try {
      axios.defaults.headers.common['Authorization'] =
      'Bearer ' + context.state.token
      const response = await axios.get('/api/todos')
      context.commit('getTodos', response.data)
    } catch (error) {
      console.log(error)
    }
  },
}