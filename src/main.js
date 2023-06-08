import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false








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
