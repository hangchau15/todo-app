// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
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

const router = new VueRouter({
  routes, 
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters.loggedIn) {
//       next({
//         path: '/login',
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     //iterate over $route.matched to check for meta fields in route records
//     if (!store.getters.loggedIn) {
//       next({
//         name: 'login',//redirect to a different location
//       })
//     } else {
//       next()//move on to the next hook in the pipeline, if no hooks are left, the navigation is confirmed
//     }
//   } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
//     if (store.getters.loggedIn) {
//       next({
//         name: 'todo',
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  store: store,
  router,
  render: h => h(App),
}).$mount('#app')
