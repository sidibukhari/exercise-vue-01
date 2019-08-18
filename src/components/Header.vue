<template>
  <div>
    <header>
      <nav class="navbar navbar-light navbar-expand-md fixed-top nav-green">
        <button class="btn btn-white"><font-awesome-icon icon="home" size="2x" /></button>
        <div class="mr-auto"></div>
        <button class="btn btn-white" v-on:click=openMenu>
          <font-awesome-icon icon="bars" size="2x" />
        </button>
      </nav>
    </header>
    <div>
      <SideMenu ref="sideMenuRef"></SideMenu>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu'

export default {
  data: function () {
    return {
      dataTarget: ''
    }
  },
  components: {
    SideMenu
  },
  methods: {
    openMenu: function () {
      this.$refs.sideMenuRef.open()
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
