<template>
  <div class="card p-3 app-card-create">
    <div class="row">
      <div class="col-10">
        <h1 class="mb-3">Create Your App</h1>
      </div>
      <div class="col-2">
        <a href="#" class="close" @click.stop="finish">
          <span>&times;</span>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-8">
        <InputText v-model="name"></InputText>
        <InputFile></InputFile>
        <InputColor></InputColor>
        <InputSelect v-model="category" :options="categories"></InputSelect>
      </div>
      <div class="col-12 col-sm-4 text-center app-card-preview-container">
        <CardPreview></CardPreview>
        <button class="btn btn-primary mt-3 app-btn-create" @click="finish">SAVE APP</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from './inputs/InputText.vue'
import InputSelect from './inputs/InputSelect.vue'
import InputFile from './inputs/InputFile.vue'
import InputColor from './inputs/InputColor.vue'
import CardPreview from './CardPreview.vue'
export default {
  methods: {
    finish () {
      this.$router.push({ path: '/success' })
    }
  },
  data () {
    return {
      categories: [
        'Web Hosting and E-Commerce',
        'Communication Platform',
        'Customer Relationship Management',
        'Accounting',
        'Payment Gateways',
        'Human Resources',
        'Project Management'
      ]
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.newApp.name
      },
      set (value) {
        this.$store.dispatch('onChangeName', value)
      }
    },
    category: {
      get () {
        return this.$store.state.newApp.category
      },
      set (value) {
        this.$store.dispatch('onChangeCategory', value)
      }
    }
  },
  components: {
    InputText,
    CardPreview,
    InputSelect,
    InputFile,
    InputColor
  }
}
</script>

<style scoped>
.close {
  line-height: 0.5;
  width: 15px;
  align-self: flex-end;
}
h1 {
  font-size: 22px;
}
.app-card-create {
  width: 100%;
  height: 100%;
}
.app-btn-create {
  width: 100%;
}
.app-card-preview-container {
  border-top: solid 1px;
}
@media (min-width: 576px) {
  .app-card-create {
    width: auto;
    min-width: 546px;
    width: calc(100vw - 10rem);
    height: auto;
  }
  .app-btn-create {
    max-width: 180px;
    width: 100%;
  }
  .app-card-preview-container {
    border-top: none;
    border-left: solid 1px;
  }
}
</style>
