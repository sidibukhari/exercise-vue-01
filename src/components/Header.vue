<template>
  <nav class="navbar navbar-expand-md fixed-top bg-green white">
    <slot name="home">
      <button class="btn white">
        <font-awesome-icon icon="home" size="2x" />
      </button>
    </slot>
    <slot name="other"></slot>
    <div class="mr-auto"></div>
    <slot name="menu">
      <button class="btn white" data-toggle="modal" :data-target="dataTarget" v-on:click="openMenu()">
        <font-awesome-icon icon="bars" size="2x" />
      </button>
    </slot>
  </nav>
</template>

<script>
import Vue from 'vue'
export default {
  data: function () {
    return {
      dataTarget: '' + Math.floor(Math.random() * (999999999999 - 10000000)) + 100000
    }
  },
  methods: {
    openMenu: function () {
      // eslint-disable-next-line no-unused-vars
      let Menu = () => import('@/components/Menu')

      new Vue({
        render: h => h(Menu)
      }).$mount('#modal')
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
