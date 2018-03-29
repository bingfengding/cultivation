import Vue from 'vue'
import Router from 'vue-router'
import loginscene from '@/components/Loginscene'
import commonscene from '@/components/commonscene'
import homescene from '@/components/homescene'
import cultivatescene from '@/components/cultivatescene'
import throughscene from '@/components/throughscene'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginscene
    },
    {
      path: '/common',
      name: 'common',
      component: commonscene,
      children: [
        {
          path: 'home',
          name: 'home',
          component: homescene
        },
        {
          path: 'cultivate',
          name: 'cultivate',
          component: cultivatescene
        },
        {
          path: 'through',
          name: 'through',
          component: throughscene
        },
        {
          path: '/common',
          redirect: 'home'
        }
      ]
    },
    {
      path: '/',
      redirect: 'login'
    }
  ]
})
