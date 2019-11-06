<template>
  <div class="form-group app-input-file">
    <label class="form-label">{{label}}</label>
    <b-form-file
      :value="value"
      ref="file-input"
      @input="changed($event)"
      size="lg"
      :accept="acceptedFileTypes"
      placeholder="Drag an image here to upload"
      drop-placeholder="Drop file here"
    ></b-form-file>
    {{value}}
  </div>
</template>

<script>
export default {
  props: ['label', 'value', 'accept'],
  methods: {
    changed (value) {
      if (value) {
        const ext = value.name.slice(value.name.lastIndexOf('.'))
        if (this.accept.length && this.accept.indexOf(ext) === -1) {
          this.$refs['file-input'].reset()
          alert('Type unsupported!')
          return
        }
        if (value.$path) delete value.$path
        let url = URL.createObjectURL(value)
        value.url = url
      }
      this.$emit('input', value)
    }
  },
  computed: {
    acceptedFileTypes () {
      if (!this.accept) return
      return this.accept.join(', ')
    }
  }
}
</script>
