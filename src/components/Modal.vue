<template>
  <div>
    <component v-if="modalToggle" v-bind:is="modalToggle" v-bind:modalId="id"></component>
    <div v-bind:id="id" class="modal" tabindex="-1" role="dialog">
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
  },
  data: function () {
    return {
      id: ''
    }
  },
  created: function () {
    this.id = '' + this._uid
  }
}
</script>
