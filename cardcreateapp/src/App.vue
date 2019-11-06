<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center app-main-container">
    <div v-if="isLoading" class="global-loading text-primary d-flex justify-content-center align-items-center mb-3">
      <b-spinner label="Loading..." ></b-spinner>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style scoped lang="scss">
.app-main-container{
    min-height: 100vh;
}
.global-loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8);
  & span{
    width: 80px; height: 80px;
  }
}
</style>
