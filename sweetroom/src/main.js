/*
 * @Author: sheldon 
 * @Date: 2019-12-27 17:29:44 
 * @Last Modified by: sheldon
 * @Last Modified time: 2020-01-14 17:38:14
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from '@/directives/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import libs from '@/libs/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(libs)

Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
