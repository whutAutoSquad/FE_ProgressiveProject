import Vue from 'vue'
import Router from 'vue-router'
import IContainer from '@/containers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IContainer',
      component: IContainer
    }
  ]
})
