<template>
    <div class="form-group">
        <label>Label</label>
        <input type="text" @input="changed($event.target.value)" :value="value" class="form-control"/>
        <small class="form-text text-muted">There're some problems here</small>
    </div>
</template>
<script>
export default {
  props: ['value'],
  methods: {
    changed (value) {
      console.log('this.value')
      this.$emit('input', value)
    }
  }
}
</script>
