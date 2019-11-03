<template>
  <div class="app-card-container text-left">
    <label>APP'S CARD PREVIEW</label>
    <div class="card">
      <div class="row no-gutters">
        <div
          class="col-4 col-sm-12 p-3 d-flex justify-content-center align-items-center"
          :style="color"
        >
          <div :style="logo" class="icon-img"></div>
        </div>
        <div class="col-8 col-sm-12 p-3">
          <strong class="card-title">{{ name || 'App Name'}}</strong>
          <div class="text-muted">{{ category || 'App Category'}}</div>
          <div class="text-success">New App</div>
        </div>
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
    },
    logo () {
      return {
        'background-color': this.$store.getters.color || '#fff',
        'background-image': 'url(' + (this.$store.getters.logo ? this.$store.getters.logo.url : '') + ')'
      }
    },
    color () {
      return { 'background-color': this.$store.getters.color || '#fff' }
    }
  }
}
</script>

<style>
.icon-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position:  center;
  background-size:  auto 80px ;
}

@media (min-width: 576px) {
  .icon-img {
  width: 120px;
  height: 120px;
  background-size:  auto 120px ;
  }
}
</style>
