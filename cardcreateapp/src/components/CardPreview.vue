<template>
  <div class="app-card-container text-left">
    <label>APP'S CARD PREVIEW</label>
    <div class="card p-3">
      <img :src="logo" class="img-fluid" alt="">
    <strong>{{ name || 'App Name'}}</strong>
      <div class="text-muted">
        {{ category || 'App Category'}}
      </div>
      <div class="text-success">New App</div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.getters.name
    },
    category () {
      return this.$store.getters.category
    },
    logo () {
      return this.$store.getters.logo ? this.$store.getters.logo.url : ''
    }
  }
}
</script>

<style>
</style>
