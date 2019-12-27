/*
 * @Author: sheldon 
 * @Date: 2019-12-27 17:29:44 
 * @Last Modified by: sheldon
 * @Last Modified time: 2019-12-27 17:53:39
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
