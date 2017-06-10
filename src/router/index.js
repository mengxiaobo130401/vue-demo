import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

const router = new Router({
  routes: [
    {
      path: '/',
      component: require('../components/Home.vue')
    },
    {
      path: '/foo',
      component: require('../components/Foo.vue'),
      children: [
        {
          path: 'bar',
          component: require('../components/foo/Bar.vue')
        },
        {
          path: 'baz',
          component: require('../components/foo/Baz.vue')
        }
      ]
    }
  ]
})

export default router
