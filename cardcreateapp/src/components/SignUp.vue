<template>
  <form class="card p-5 text-center" @submit.prevent="signUp">
    <div class="form-group">
      <input type="text" name="name" v-model="email" required class="form-control" placeholder="Login" />
    </div>
    <div class="form-group">
      <input type="password" name="password" v-model="password" required class="form-control" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
    <small>
      Already registered?
      <router-link to="/Login">Sign in</router-link>
    </small>
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
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert('Your account has been created!')
          this.$router.replace('login')
        }, (err) => {
          alert(err.message)
        })
    }
  }
}
</script>
