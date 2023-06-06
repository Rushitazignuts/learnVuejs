import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')
console.log(store.state.count)

new Vue({
  render: h => h(App),
}).$mount('#app')
// let store ={
// username : "john"
// }
// new Vue({
//   e1 : "App",
//   data:{
    
//       userdata : store
   
//   }
// }),
// new Vue({
//   e1 : "#app2",
//   data:{
    
//       userdata : store
   
//   }
// })
