<template>
  <transition name="modal">
    <div :id="id" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" :class="{ 'dialog-full': fullscreen }" role="document">
        <div class="modal-content bg-green p-2" :class="{ 'content-full': fullscreen }">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean
    }
  },
  data: function () {
    return {
      id: '' + Math.floor(Math.random() * (999999999999 - 10000000)) + 100000
    }
  },
  mounted: function () {
    let context = this
    // eslint-disable-next-line
    $('#' + this.id).modal('show')
    // eslint-disable-next-line
    $('#' + this.id).on('hidden.bs.modal', function(e) {
      context.$destroy()
    })
  },
  destroyed: function () {
    document.getElementById(this.id).outerHTML = ''
  }
}
</script>

<style lang="stylus" scoped>
.bg-green
  background-color base-green
.dialog-full
  width 100%
  height 100%
  margin 0
  padding 0
  max-width 100%

.content-full
  height auto
  min-height 100%
  border-radius 0
</style>
