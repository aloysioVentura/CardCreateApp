<template>
  <form class="card p-5 text-center" @submit.prevent="signUp">
  <div v-if="showSuccessAlert" class="alert alert-success mb-3">
    Your account has been created!
  </div>
    <h1 class="h3 text-secondary mb-1">App Create</h1>
        <small class="text-muted mb-3">Sign up!<br>Just type your e-mail and <br> choose a password!</small>
    <div class="form-group">
      <input type="text" name="name" v-model="email" required class="form-control" placeholder="E-mail" />
    </div>
    <div class="form-group">
      <input type="password" name="password" v-model="password" required class="form-control" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary mb-1">Sign Up</button>
    <small>
      Already registered?
      <router-link to="/Login">Log in</router-link>
    </small>
  </form>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      showSuccessAlert: false
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.showSuccessAlert = true
          setTimeout(() => {
            this.$router.replace('login')
          }, 2000)
        }, (err) => {
          alert(err.message)
        })
    }
  }
}
</script>
