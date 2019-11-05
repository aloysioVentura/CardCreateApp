import Welcome from './components/Welcome.vue'
import Create from './components/Create.vue'
import Success from './components/Success.vue'
import Login from './components/Login.vue'
import List from './components/List.vue'
import SignUp from './components/SignUp.vue'

export const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '',
    component: Welcome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/welcome',
    component: Welcome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/success',
    component: Success,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/list',
    component: List,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create',
    component: Create,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/sign-up',
    component: SignUp
  }
]
