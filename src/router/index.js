import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import TodoApp from '@/components/todo_app/TodoApp'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'

Vue.use(VueAxios, axios)
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoApp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]
export default routes
