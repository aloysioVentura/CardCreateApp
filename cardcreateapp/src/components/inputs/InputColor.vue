<template>
  <div class="form-group">
    <label>{{label}}</label>
    <div  id="popover" class="input-group input-group-lg mb-3">
  <input type="text" class="form-control" placeholder="Pick a color">
  <div class="input-group-append">
    <span class="input-group-text text-white" id="basic-addon2" :style="color">{{value}}</span>
  </div>

    <b-popover target="popover" :placement="'top'" triggers="click focus blur">
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
      console.log(value)
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
