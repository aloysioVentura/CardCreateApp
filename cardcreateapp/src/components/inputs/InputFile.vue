<template>
  <div class="form-group app-input-file">
    <label class="form-label">{{label}}</label>
    <b-form-file
      :value="value"
      @input="changed($event)"
      size="lg"
      accept="image/*"
      placeholder="Drag an image here to upload"
      drop-placeholder="Drop file here"
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
