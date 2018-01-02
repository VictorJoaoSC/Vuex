import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contador from '@/components/PaginaInicial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/contador',
      name: 'Contador',
      component: Contador
    }
  ]
})
