<template>
<div class="list-container container">
  <h1 v-if="!isLoading" class="h2 my-4"><router-link to="/welcome">&lt;</router-link> Apps</h1>
  <hr>
  <div class="row list mt-4">
    <div class="col-md-4" v-for="(app, index) in apps" :key="index">
      <CardPreview :app="app" class="mb-4"></CardPreview>
    </div>
  </div>
  <div v-if="!apps.length && !isLoading" class="text-center text-muted p-5">No app added yet!</div>
</div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import CardPreview from './CardPreview.vue'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    CardPreview
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
  },
  computed: {
    apps () {
      return this.$store.getters.apps
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  created () {
    this.$store.dispatch('onLoadApps')
  }
}
</script>
<style scoped>
.list-container{
  height: 100vh;
}
  @media (min-width: 576px) {
    .list {
      height: auto;
    }
  }
</style>
