/* eslint-disable */
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://todo-mvc-api-typeorm.herokuapp.com'

export const store_todo = new Vuex.Store({
    state: {
        todos: []
    },
    getters: getters,
    mutations: mutations,
    actions: actions
})