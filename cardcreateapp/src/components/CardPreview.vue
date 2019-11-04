<template>
  <div class="app-card-container text-left">
    <label><strong>APP'S CARD PREVIEW</strong></label>
    <div class="card">
      <div class="row no-gutters">
        <div
          class="col-4 col-sm-12 p-3 d-flex justify-content-center align-items-center logo-container"
          :style="color"
        >
          <div :style="logo" class="icon-img"></div>
        </div>
        <div class="col-8 col-sm-12 p-3">
          <strong class="card-title">{{ name || 'App Name'}}</strong>
          <div class="text-muted">{{ category || 'App Category'}}</div>
          <div class="text-success"><small>New App</small></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app'],
  computed: {
    name () {
      return this.app.name
    },
    category () {
      return this.app.category
    },
    logo () {
      return {
        'background-color': this.app.color || '#fff',
        'background-image': 'url(' + (this.app.logo ? this.app.logo.url : '') + ')'
      }
    },
    color () {
      return { 'background-color': this.app.color || '#fff' }
    }
  }
}
</script>

<style>
.logo-container{
  border-radius: 0.25rem 0 0 0.25rem;
}

.card-title{
  font-size: 18px;
}

.icon-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position:  center;
  background-size:  auto 80px ;
}

@media (min-width: 576px) {
  .logo-container{
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .icon-img {
  width: 120px;
  height: 120px;
  background-size:  auto 120px ;
  }
}
</style>
