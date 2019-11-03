<template>
  <div class="app-card-container text-left">
    <label>APP'S CARD PREVIEW</label>
    <div class="card p-3">
    <strong>{{ name }}</strong>
      <div class="text-muted">
        {{ category }}
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
    }
  }
}
</script>

<style>
</style>
