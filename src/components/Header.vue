<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-md fixed-top nav-green">
      <button class="btn btn-white"><font-awesome-icon icon="home" size="2x" /></button>
      <div class="mr-auto"></div>
      <SideMenu ref="sideMenuRef"></SideMenu>
    </nav>
  </header>
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
  }
}
</script>

<style lang="stylus" scoped>
.nav-green
  background-color base-green !important
</style>
