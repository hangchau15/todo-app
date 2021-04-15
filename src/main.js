import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import routes from './router/index'
import { store } from './store/index'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'pure-css-loader/dist/css-loader.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuelidate)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        name: 'dashboard'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.state.token) {
      next({
        name: 'todo'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
