import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import BootstrapVue from 'bootstrap-vue'
import './custom.scss'

Vue.use(BootstrapVue)

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
