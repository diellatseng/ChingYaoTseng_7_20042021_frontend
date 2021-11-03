import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    authObj: {
      userId: "",
      token: "",
      
    },
    posts: []
  },
  getters: {
    getPosts(state) {
      return state.posts
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})