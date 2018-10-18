import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Nihao from '@/components/Nihao.vue'
import WoYeHao from '@/components/woyehao.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nihao',
      name: 'Nihao',
      component: Nihao,
      children: [
        {
          path: 'woyehao',
          name: 'WoYeHao',
          component: WoYeHao, 
        }
      ]
    }

  ]
})
