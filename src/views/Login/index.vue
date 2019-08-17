<template>
  <div class="row h-100">
    <div class="col-md-8 bg-green"></div>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="stylus" scoped>
.bg-green
  background-color base-green
</style>
