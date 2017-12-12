import Vue from 'vue'
import Router from 'vue-router'
import Shou from '@/components/Shou'
import Fen from '@/components/Fen'
import Shopping from '@/components/Shopping'
import Leka from '@/components/Leka'
import Mine from '@/components/Mine'
import denglu from '@/components/denglu'
import hp from '@/components/hp'
import pinpai2 from '@/components/pinpai2'
import pinpai1 from '@/components/pinpai1'
import ko from '@/components/ko'
import xinrenli from '@/components/xinrenli'
import lehuajie from '@/components/lehuajie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect: "/Shou"
    },
    {
      path: '/Shou',
      name: 'Shou',
      component: Shou
    },
     {
      path: '/Fen',
      name: 'Fen',
      component: Fen
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Leka',
      name: 'Leka',
      component: Leka
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path:'/denglu',
      name:'denglu',
      component:denglu
    },
    {
      path:'/hp',
      name:'hp',
      component:hp
    },
     {
      path:'/pinpai2',
      name:'pinpai2',
      component:pinpai2
    },
    {
      path:'/pinpai1',
      name:'pinpai1',
      component:pinpai1
    },
     {
      path:'/ko',
      name:'ko',
      component:ko
    },
    {
      path:'/xinrenli',
      name:'xinrenli',
      component:xinrenli
    },
     {
      path:'/lehuajie',
      name:'lehuajie',
      component:lehuajie
    }
  ]
})
