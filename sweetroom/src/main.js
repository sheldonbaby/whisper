/*
 * @Author: sheldon 
 * @Date: 2019-12-27 17:29:44 
 * @Last Modified by: sheldon
 * @Last Modified time: 2019-12-30 14:02:09
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from '@/directives/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
