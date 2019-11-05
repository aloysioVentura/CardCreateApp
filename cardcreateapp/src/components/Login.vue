<template>
  <form class="card p-5 text-center" @submit.prevent="login">
    <div class="form-group">
      <input type="email" name="email" v-model="email" required class="form-control" placeholder="email" />
    </div>
    <div class="form-group">
      <input type="password" name="password" v-model="password" required class="form-control" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
    <small>Don't have an account? <router-link to="/sign-up">Create one</router-link></small>
  </form>
</template>

<script>
import firebase from 'firebase'
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
          alert('You ar now connected!')
          this.$router.replace('Welcome')
        },
        (err) => {
          alert(err.message)
        })
    }
  }
}
</script>
