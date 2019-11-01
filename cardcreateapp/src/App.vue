<template>
  <div id="app">
    <app-welcome></app-welcome>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'app',
  components: {
    'app-welcome': Welcome
  }
}
</script>

<style lang="scss">

</style>
