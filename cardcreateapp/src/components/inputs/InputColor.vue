<template>
  <div class="form-group">
    <label class="form-label">{{label}}</label>
    <div  id="popover" class="input-group input-group-lg mb-3">
  <input type="text" class="form-control" placeholder="Pick a color">
  <div class="input-group-append">
    <span class="input-group-text text-white" id="basic-addon2" :style="color">{{value}}</span>
  </div>
    <b-popover target="popover" :placement="'top'" class="p-0" triggers="click blur">
      <ColorPicker
        :value="value"
        @input="changed"
        class="color-picker"
      />
    </b-popover>
  </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'
export default {
  props: ['label', 'value'],
  components: {
    ColorPicker: Chrome
  },
  methods: {
    changed (value) {
      this.$emit('input', value.hex)
    }
  },
  computed: {
    color () {
      return { 'background-color': (this.$store.getters.color || '#fff') }
    }
  }
}
</script>

<style>
.input-group-lg > input.form-control:not(textarea){
  font-size: 16px;
  height: calc(2.5em + 1rem + 2px);
}
</style>
