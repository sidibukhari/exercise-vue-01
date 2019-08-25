<template>
  <Modal :fullscreen="true">
    <template v-slot:content>
      <div class="d-flex justify-content-end mb-3">
        <button class="btn white" data-dismiss="modal">
          <font-awesome-icon icon="times" size="3x" />
        </button>
      </div>
      <div class="text-center">
        <router-link tag="button" class="btn white btn-block" to="/" data-dismiss="modal"
          ><h1 class="p-2">Home</h1>
        </router-link>
        <router-link tag="button" class="btn white btn-block" to="/" data-dismiss="modal"
          ><h1 class="p-2">Pay & Transfer</h1>
        </router-link>
        <router-link tag="button" class="btn white btn-block" to="/" data-dismiss="modal"
          ><h1 class="p-2">Todo</h1>
        </router-link>
        <router-link tag="button" class="btn white btn-block" to="/about" data-dismiss="modal"
          ><h1 class="p-2">About</h1>
        </router-link>
        <button class="btn white btn-block" v-on:click="logout" data-dismiss="modal">
          <h1 class="p-2">Logout</h1>
        </button>
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
  methods: {
    logout: function () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="stylus" scoped>
.white
  color white

button.white:hover
  color gray

.bg-green
  background-color base-green
</style>
