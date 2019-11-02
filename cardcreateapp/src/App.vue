<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center app-main-container">
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style scoped>
.app-main-container{
    height: 100vh;
}
</style>
