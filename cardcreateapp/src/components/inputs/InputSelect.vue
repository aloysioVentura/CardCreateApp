<template>
    <div class="form-group">
        <label>{{label}}</label>
        <select @input="changed($event.target.value)" :value="value" class="form-control">
            <option v-for="option in options" v-bind:key="option">{{option}}</option>
        </select>
        <small class="form-text text-muted">There're some problems here</small>
    </div>
</template>
<script>
export default {
  props: ['value', 'options', 'label'],
  methods: {
    changed (value) {
      this.$emit('input', value)
    }
  }
}
</script>
