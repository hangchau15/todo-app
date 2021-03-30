/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import TodoApp from '@/components/TodoApp'
import Login from '@/components/Login'
// import TodoItem from '@/components/TodoItem'


Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/todo',
    //   name: 'todo',
    //   component: TodoItem
    // }
  ]
})
