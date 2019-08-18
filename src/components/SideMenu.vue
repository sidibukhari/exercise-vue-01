<template>
  <b-modal :id="id" hide-footer hide-header dialog-class="fullscreen">
    <div class="bg-green fullscreen p-4">
      <div class="d-flex justify-content-end mb-3">
        <button class="btn color-white" v-on:click="close">
          <font-awesome-icon icon="times" size="3x" />
        </button>
      </div>
      <div class="text-center">
        <button class="btn color-white btn-block"><h1 class="p-2">Cras justo odio</h1></button>
        <button class="btn color-white btn-block"><h1 class="p-2">Dapibus ac facilisis in</h1></button>
        <button class="btn color-white btn-block"><h1 class="p-2">Morbi leo risus</h1></button>
        <button class="btn color-white btn-block"><h1 class="p-2">Porta ac consectetur ac</h1></button>
        <button class="btn color-white btn-block">
          <h1 class="p-2" v-on:click="logout">
            Logout
          </h1>
        </button>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  data: function () {
    return {
      id: ''
    }
  },
  methods: {
    open: function () {
      this.$bvModal.show(this.id)
    },
    close: function () {
      this.$bvModal.hide(this.id)
    },
    logout: function () {
      this.close()
      this.$store.dispatch('auth/logout')
    }
  },
  created: function () {
    this.id = '' + this._uid
  }
}
</script>

<style lang="stylus" scoped>
.color-white
  color white

.bg-green
  background-color base-green !important

.fullscreen {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    position: fixed;
    z-index: 100000;
}
</style>
