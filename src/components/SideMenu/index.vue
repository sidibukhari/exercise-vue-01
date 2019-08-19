<template>
  <Modal>
    <component v-bind:is="modalToggle"></component>
    <component v-bind:is="modalContent"></component>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'
import Toggler from './SideMenuToggler'
import Content from './SideMenuContent'
export default {
  components: {
    Modal,
    Toggler,
    Content
  },
  data: function () {
    return {
      modalToggle: 'Toggler',
      modalContent: 'Content'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
