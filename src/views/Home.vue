<template>
  <ViewWrapper>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:body>
      <div class="text-center">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </template>
  </ViewWrapper>
</template>

<script>
import ViewWrapper from '@/components/ViewWrapper'
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    ViewWrapper,
    Header,
    HelloWorld
  }
}
</script>
