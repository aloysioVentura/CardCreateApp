<template>
  <div class="app-card-container text-left">
    <label>APP'S CARD PREVIEW</label>
    <div class="card">
      <h2>{{ name }}</h2>
      <div class="text-muted">
        {{ category }}
      </div>
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
    }
  }
}
</script>

<style>
</style>
