<template>
  <div class="form-group app-input-file">
    <label class="form-label">{{label}}</label>
    <b-form-file
      :value="value"
      @input="changed($event)"
      size="lg"
      placeholder="Select a File"
      drop-placeholder="Drop file here"
      class=" d-block d-sm-none"
    ></b-form-file>
        <b-form-file
      :value="value"
      @input="changed($event)"
      size="lg"
      placeholder="Drag an image here to upload"
      drop-placeholder="Drop file here"
      class="d-none d-sm-block"
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
