<template>
  <ViewWrapper>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:body>
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </template>
  </ViewWrapper>
</template>

<script>
import ViewWrapper from '@/components/ViewWrapper'
import Header from '@/components/Header'
export default {
  components: {
    ViewWrapper,
    Header
  }
}
</script>

<style lang="stylus" scoped></style>
