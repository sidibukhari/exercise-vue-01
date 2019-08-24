<template>
  <Modal :fullscreen="true">
    <template v-slot:content>
      <div class="d-flex justify-content-end mb-3">
        <button class="btn white" data-dismiss="modal">
          <font-awesome-icon icon="times" size="3x" />
        </button>
      </div>
      <div class="text-center">
        <button class="btn white btn-block" data-dismiss="modal">
          <h1 class="p-2" v-on:click="home">Home</h1>
        </button>
        <button class="btn white btn-block" data-dismiss="modal">
          <h1 class="p-2">Pay & Transfer</h1>
        </button>
        <button class="btn white btn-block" data-dismiss="modal">
          <h1 class="p-2">Todo</h1>
        </button>
        <button class="btn white btn-block" data-dismiss="modal">
          <h1 class="p-2" v-on:click="about">About</h1>
        </button>
        <button class="btn white btn-block" data-dismiss="modal">
          <h1 class="p-2" v-on:click="logout">Logout</h1>
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
    home: function () {
      this.$router.push('/')
    },
    about: function () {
      this.$router.push('/about')
    },
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
