<template>
<div>
  <form class="card p-5 text-center" @submit.prevent="login">
    <h1 class="h4 text-secondary mb-1">App Create</h1>
    <small class="text-muted mb-3">Log in with your credentials</small>
    <div class="form-group">
      <input type="email" name="email" v-model="email" required class="form-control" placeholder="E-mail" />
    </div>
    <div class="form-group">
      <input type="password" name="password" v-model="password" required class="form-control" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary mb-1">Log In</button>
    <small>Don't have an account? <router-link to="/sign-up">Sign up</router-link></small>
  </form>
</div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace('Welcome')
        },
        (err) => {
          alert(err.message)
        })
    }
  }
}
</script>
