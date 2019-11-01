import Welcome from './components/Welcome.vue'
import Create from './components/Create.vue'
import Success from './components/Success.vue'

export const routes = [
  { path: '', component: Welcome },
  { path: '/success', component: Success },
  { path: '/create', component: Create }
]
