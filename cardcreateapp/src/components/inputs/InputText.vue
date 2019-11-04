<template>
    <div class="form-group">
        <label class="form-label">{{label}}</label>
        <input type="text" @input="changed($event.target.value)" :placeholder="placeholder" :value="value" :required="required" class="form-control"/>
    </div>
</template>
<script>
export default {
  props: ['value', 'label', 'required', 'placeholder'],
  methods: {
    changed (value) {
      this.$emit('input', value)
    }
  }
}
</script>
