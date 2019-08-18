<template>
  <div>
    <Header></Header>
    <div class="text-center pad-top-100">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
.pad-top-100
  padding-top 100px
</style>
