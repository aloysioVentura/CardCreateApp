<template>
  <div class="text-center">
    <h1>Let's create your app!</h1>
    <router-link tag="button" class="btn btn-primary" to="/create">Begin!</router-link>
    <div>
      <button @click="logout" class="btn btn-link mt-5">logout</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
    }
  }
}
</script>

<style>
</style>
