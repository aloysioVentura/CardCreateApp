<template>
    <div class="form-group">
        <label class="form-label">{{label}}</label>
        <select @input="changed($event.target.value)" :value="value" class="form-control">
          <option value="" disabled>Select a Category</option>
            <option v-for="option in options" v-bind:key="option">{{option}}</option>
        </select>
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
