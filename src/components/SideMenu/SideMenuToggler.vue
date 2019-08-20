<template>
  <button class="btn btn-white" data-toggle="modal" :data-target=dataTarget>
    <font-awesome-icon icon="bars" size="2x" />
  </button>
</template>

<script>
export default {
  props: {
    dataTarget: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-white
  color white
</style>
