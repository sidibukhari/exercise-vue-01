<template>
  <button class="btn btn-white" data-toggle="modal" data-target="#{modalId}">
    <font-awesome-icon icon="bars" size="2x" />
  </button>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String
    }
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
</style>
