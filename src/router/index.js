import Vue from 'vue'
import Router from 'vue-router'
import child from '@/components/child'
import parent from '@/components/parent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: parent
    },
    {
      path: '/child',
      name: 'child',
      component: child
    }
  ]
})
