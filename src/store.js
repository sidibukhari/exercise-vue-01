import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    auth: {
      username: '',
      isLogin: false,
      sessionTimeout: 300,
      toURL: ''
    }
  },
  mutations: {
    setURL (state, toURL) {
      if (toURL === undefined) {
        state.auth.toURL = toURL
      }
    },
    login (state, { username, password }) {
      if (username !== '' & password !== '') {
        state.auth.username = username
        state.auth.isLogin = true
      }
    },
    logout (state) {
      state.auth.username = ''
      state.auth.isLogin = false
    }
  },
  actions: {
  }
})
