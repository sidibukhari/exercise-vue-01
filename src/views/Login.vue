<template>
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
        class="form-control"
        placeholder="Password"
        required=""
        v-model="password"
      />
      <div class="input-group-append" v-on:click="show">
        <span class="input-group-text"
          ><font-awesome-icon :icon="passwordShowIcon"
        /></span>
      </div>
    </div>
    <div class="checkbox mb-3">
      <label> <input type="checkbox" value="remember-me" /> Remember me </label>
    </div>
    <button
      class="btn btn-lg btn-primary btn-block"
      type="submit"
      v-on:click="submit"
    >
      Sign in
    </button>
    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
  </form>
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
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
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
}

.form-signin .input-group
  margin-bottom 10px

.form-signin .input-group input[type='password'],
.form-signin .input-group input[type='text']
  border-top-left-radius 0 !important
  border-top-right-radius 0 !important
  border-bottom-right-radius 0 !important

.form-signin .input-group span
  border-top-left-radius 0 !important
  border-top-right-radius 0 !important
  border-bottom-left-radius 0 !important
</style>
