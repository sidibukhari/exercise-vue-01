import Vue from 'vue'
import router from '@/router/'
import store from '@/store/'
export default {
  openModal: function (modal, id) {
    let component = new Vue({
      router,
      store,
      render: h => h(modal)
    }).$mount()

    document.getElementById('modal').appendChild(component.$el)
  }
}
