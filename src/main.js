// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import routes from './router/index'
import { store } from './store/auth/store'
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
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.authenticated) {
      next({
        name: 'dashbroad',
      })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.authenticated) {
      next({
        name: 'todo',
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
  render: h => h(App),
}).$mount('#app')
