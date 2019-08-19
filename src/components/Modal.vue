<template>
  <div>
    <component v-if="modalToggle" v-bind:is="{modalToggle}"></component>
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <component v-bind:is="modalContent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalToggle: {
      type: Object
    },
    modalContent: {
      type: Object
    }
  }
}
</script>
