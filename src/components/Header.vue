<template>
  <nav class="navbar navbar-expand-md fixed-top bg-green white">
    <slot name="home">
      <button class="btn white">
        <font-awesome-icon icon="home" size="2x" />
      </button>
    </slot>
    <slot name="otherLeft"></slot>
    <div class="mr-auto"></div>
    <slot name="otherRight"></slot>
    <slot name="menu">
      <button class="btn white" v-on:click="openMenu()">
        <font-awesome-icon icon="bars" size="2x" />
      </button>
    </slot>
  </nav>
</template>

<script>
import General from '@/utils/General'
export default {
  methods: {
    openMenu: function () {
      let Menu = () => import('@/components/Menu')
      General.openModal(Menu, this.dataTarget)
    }
  }
}
</script>

<style lang='stylus' scoped>
.bg-green
  background-color base-green

.white
  color white

button.white:hover
  color gray
</style>
