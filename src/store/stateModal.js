export default {
  namespaced: true,
  state: {
    modal: ''
  },
  mutations: {
    setModal (state, component) {
      state.modal = component
    }
  },
  actions: {
    setModal ({ commit }, component) {
      if (component === undefined) {
        commit('setModal', component)
      }
    }
  }
}
