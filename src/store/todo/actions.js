/* eslint-disable */
import axios from 'axios'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmZjNkNzQ4LTJmZDktNGRiZC04NTIyLWYwNjQwOGQ5ODA5NyIsImlhdCI6MTYxNzA4OTUyNywiZXhwIjoxNjE3Njk0MzI3fQ.N5ZsRL8oKKuqE1jukPrzIJbCP0bJM839qgML9Mn9Clk"

export default {
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
}