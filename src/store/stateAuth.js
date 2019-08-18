import router from '@/router/'

export default {
  namespaced: true,
  state: {
    username: '',
    isLogin: false,
    sessionTimeout: 300,
    toURL: ''
  },
  mutations: {
    setURL (state, toURL) {
      state.toURL = toURL
    },
    login (state, username) {
      state.username = username
      state.isLogin = true
    },
    logout (state) {
      state.username = ''
      state.isLogin = false
    }
  },
  actions: {
    setURL ({ commit }, toURL) {
      if (toURL === undefined) {
        commit('setURL', toURL)
      }
    },
    login ({ commit, dispatch, state }, { username, password }) {
      if (username !== '' & password !== '') {
        commit('login', username)
        let countdown = state.sessionTimeout
        let timer = setInterval(function () {
          if (state.isLogin === false) {
            clearInterval(timer)
            return
          }
          countdown -= 1
          // eslint-disable-next-line no-console
          console.log(countdown)
          if (countdown <= 0) {
            dispatch('logout')
            clearInterval(timer)
          }
        }, 1000)
        router.push('/')
      }
    },
    logout ({ commit, state }) {
      if (state.username !== '') {
        commit('logout')
        router.push('/login')
      }
    }
  }
}
