<template>
<div>
Criando!!
    <button class="btn" v-on:click="finish">
            Salvar
    </button>
    </div>
</template>

<script>
export default {
  methods: {
    finish () {
      this.$router.push({ path: '/success' })
    }
  }
}
</script>
