<template>
  <div class="form-group">
    <label>{{label}}</label>
    <b-form-file
      :value="value"
      @input="changed($event)"
      size="lg"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
  methods: {
    changed (value) {
      if (value) {
        let url = URL.createObjectURL(value)
        value.url = url
      }
      this.$emit('input', value)
    }
  }
}
</script>
