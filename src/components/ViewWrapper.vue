<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <div class="pad-top-100">
      <slot name="body"></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
.pad-top-100
  padding-top 100px
</style>
