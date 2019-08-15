<template>
  <div class="card mt-5">
    <div class="card-body">
      <!-- <form> -->
        <div class="form-group">
          <label>User ID</label>
          <input type="text" class="form-control" placeholder="User ID" v-model="username" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
        </div>
        <button class="btn btn-primary" v-on:click="submit">Submit</button>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit: function () {
      this.$store.commit('login', { username: this.$data.username, password: this.$data.password })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped></style>
