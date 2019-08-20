<template>
  <Modal :id=id>
    <template v-slot:content>
      <div class="bg-green p-4">
        <div class="d-flex justify-content-end mb-3">
          <button class="btn color-white" data-dismiss="modal">
            <font-awesome-icon icon="times" size="3x" />
          </button>
        </div>
        <div class="text-center">
          <button class="btn color-white btn-block">
            <h1 class="p-2">Cras justo odio</h1>
          </button>
          <button class="btn color-white btn-block">
            <h1 class="p-2">Dapibus ac facilisis in</h1>
          </button>
          <button class="btn color-white btn-block">
            <h1 class="p-2">Morbi leo risus</h1>
          </button>
          <button class="btn color-white btn-block">
            <h1 class="p-2">Porta ac consectetur ac</h1>
          </button>
          <button class="btn color-white btn-block" data-dismiss="modal">
            <h1 class="p-2" v-on:click="logout">Logout</h1>
          </button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: {
    Modal
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="stylus" scoped>
.color-white {
  color: white;
}

.bg-green {
  background-color: base-green !important;
}

.fullscreen {
  max-width: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  position: fixed;
}
</style>
