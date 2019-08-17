<template>
  <div class="root col-12 col-md-4 h-100 justify-content-center align-items-center">
    <form class="form-signin text-center">
      <img class="mb-4" src="@/assets/logo.png" alt="" width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Welcome, Guest!</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
        v-model="username"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <div class="input-group">
        <input
          :type="passwordType"
          id="inputPassword"
          class="form-control rounded-0 border-right-0"
          placeholder="Password"
          required=""
          v-model="password"
        />
        <div class="input-group-append" v-on:click="show">
          <span class="input-group-text rounded-0 input-style"
            ><font-awesome-icon :icon="passwordShowIcon"
          /></span>
        </div>
      </div>
      <button
        class="btn btn-lg btn-green btn-block"
        type="submit"
        v-on:click="submit"
      >
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: '',
      passwordType: 'password',
      passwordShowIcon: 'eye-slash'
    }
  },
  methods: {
    submit: function () {
      this.$store.commit('login', {
        username: this.username,
        password: this.password
      })
      this.$router.push('/')
    },
    show: function () {
      this.$data.passwordType =
        this.passwordType === 'password' ? 'text' : 'password'
      this.$data.passwordShowIcon =
        this.passwordShowIcon === 'eye' ? 'eye-slash' : 'eye'
    }
  }
}
</script>

<style lang="stylus" scoped>

.root
  display -ms-flexbox
  display flex
  padding-top 40px
  padding-bottom 40px
  background-color #f5f5f5

.form-signin {
  width: 100%;
  max-width: 330px;
  margin: auto;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}

.btn-green
  background-color base-green
  color white
  border-bottom-right-radius 25px
  border-bottom-left-radius 25px
  border-top-right-radius 0
  border-top-left-radius 0

.input-style
  background-color white
  border-left 0px
</style>
