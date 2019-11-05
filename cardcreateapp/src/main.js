import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import VueRouter from 'vue-router'
import { routes } from './routes'
import BootstrapVue from 'bootstrap-vue'
import { store } from './store/store'
import './custom.scss'

Vue.use(BootstrapVue)

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('welcome')
  else next()
})

Vue.config.productionTip = false

let app = ''

var firebaseConfig = {
  apiKey: 'AIzaSyDf8aUhGLJpCmQ_6gByXBW7edHSgsuqst4',
  authDomain: 'cardcreateapp.firebaseapp.com',
  databaseURL: 'https://cardcreateapp.firebaseio.com',
  projectId: 'cardcreateapp',
  storageBucket: 'gs://cardcreateapp.appspot.com',
  messagingSenderId: '121744271237',
  appId: '1:121744271237:web:c9a2053ed984f36ddd46ec',
  measurementId: 'G-N1V1XZC9FL'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      render: h => h(App),
      router,
      store
    }).$mount('#app')
  }
})
