// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
const store =  new Vuex.Store({
  state: {
    contador: 0
  },
  mutations: {
    incrementar(state) {
      this.state.contador++
    }
  }
})

// const store = new Vuex.store({
//   state:{
//     count : 0
//   },
//   mutations:{
//     incrementar(state){
//       thi.$state.count++
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})