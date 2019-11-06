<template>
  <div class="text-center welcome-container d-flex flex-column justify-content-center align-items-center">
<div class="card d-block mt-sm-5 mx-3 mx-sm-5 mb-1 p-5 text-center">
      <img src="../assets/add-icon.png" alt="" class="add-icon my-5">
    <h1 class="h2 text-secondary mb-5">Let's create your app!</h1>
    <router-link tag="button" class="btn btn-primary my-5" to="/create">Begin</router-link>
        <div>
      <button @click="logout" class="btn btn-link mt-3 align-self-bottom text-danger">logout</button>
    </div>
</div>
        <div>
      <button @click="goToList" class="btn btn-link mb-3">List of created apps</button>
    </div>

  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  methods: {
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
    },
    goToList () {
      this.$router.replace('list')
    }
  }
}
</script>

<style scoped>
.welcome-container{
  height: 100vh
}
.add-icon{
  width: 80px
}
</style>
