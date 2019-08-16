import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  switch (to.path) {
    case '/login':
      next()
      break
    default:
      if (store.state.auth.isLogin === false) {
        store.commit('setURL', store.state.auth.toURL === '' ? to.path : store.state.auth.toURL)
        next('/login')
      } else {
        if (store.state.auth.toURL !== '') {
          const toURL = store.state.auth.toURL
          store.commit('setURL', '')
          next(toURL)
        } else {
          next()
        }
      }
      break
  }
})

export default router
