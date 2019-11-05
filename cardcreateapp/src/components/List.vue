<template>
<div class="row list">
<div class="col-md-4" v-for="app in apps" :key="app">
    <CardPreview :app="app"></CardPreview>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
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
    }
  },
  created () {
    this.$store.dispatch('onLoadApps')
  }
}
</script>
<style scoped>
  .list{
    width: 100%
  }
  @media (min-width: 576px) {
    .list {
      min-width: 546px;
      max-width: 946px;
      width: calc(100vw - 2rem);
      height: auto;
    }
  }
</style>
