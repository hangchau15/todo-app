/* eslint-disable */
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://todo-mvc-api-typeorm.herokuapp.com'

export const store= new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        todos: [],
        todoInput: null,
        selectedID: null,
        isEditting: false,
        loading: false,
    },
    getters: getters,
    mutations: mutations,
    actions: actions
})