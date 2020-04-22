import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/admin'
import Teacher from '@/components/teacher'
import Kids from '@/components/kids'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/kids',
      name: 'Kids',
      component: Kids
    }
  ]
})
