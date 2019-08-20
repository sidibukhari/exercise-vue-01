<template>
  <div id="app" class="container-fluid">
    <router-view />
    <component :is="currentModal"></component>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentModal: this.$state.modal.modal
    }
  }
}
</script>

<style lang="stylus">
html, body, #app {
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>
