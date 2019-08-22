<template>
  <div>
    <header>
      <nav class="navbar navbar-light navbar-expand-md fixed-top nav-green">
        <button class="btn btn-white"><font-awesome-icon icon="home" size="2x" /></button>
        <slot name="search"></slot>
        <div class="mr-auto"></div>
        <Toggler :dataTarget="'#' + dataTarget" v-on:click=clickToggler()></Toggler>
      </nav>
    </header>
    <Modal :id="dataTarget" v-if="showModal === true"></Modal>
  </div>
</template>

<script>
import Toggler from '@/components/SideMenu/SideMenuToggler'
import Modal from '@/components/SideMenu/SideMenuModal'

export default {
  components: {
    Toggler,
    Modal
  },
  data: function () {
    return {
      dataTarget: '' + Math.floor(Math.random() * (999999999999 - 10000000)) + 100000,
      showModal: false
    }
  },
  methods: {
    clickToggler: function () {
      // eslint-disable-next-line no-console
      console.log('button is clicjk')
      this.showModal = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-white
  color white

.nav-green
  background-color base-green !important
</style>
