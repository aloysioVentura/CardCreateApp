<template>
  <div class="form-group">
    <label>{{label}}</label>
    <div id="popover" class="form-control form-control-lg"></div>
    <b-popover target="popover" triggers="hover focus">
      <ColorPicker
        :value="value"
        @input="changed"
        class="color-picker"
      />
    </b-popover>
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
  }
}
</script>
