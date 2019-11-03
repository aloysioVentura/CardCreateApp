<template>
    <div class="form-group">
        <label>{{label}}</label>
        <input type="text" @input="changed($event.target.value)" :value="value" class="form-control"/>
        <small class="form-text text-muted">There're some problems here</small>
    </div>
</template>
<script>
export default {
  props: ['value', 'label'],
  methods: {
    changed (value) {
      this.$emit('input', value)
    }
  }
}
</script>
