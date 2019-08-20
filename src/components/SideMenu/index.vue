<template>
  <div>
    <Toggler :dataTarget="'#'+dataTarget"></Toggler>
    <Modal :id=dataTarget></Modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Toggler from './SideMenuToggler'
import Modal from './SideMenuModal'

Vue.component('side-menu-modal', Modal)

export default {
  components: {
    Toggler
  },
  data: function () {
    return {
      dataTarget: '' + Math.floor(Math.random() * (999999999999 - 10000000)) + 100000
    }
  },
  mounted: function () {
    this.$state.dispatch('modal/setModal', 'side-menu-modal')
  }
}
</script>
