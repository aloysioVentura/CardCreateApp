<template>
  <div class="card p-5 app-card-create">
    <div class="row">
      <div class="col-10">
        <h1 class="mb-3">Create Your App</h1>
      </div>
      <div class="col-2">
        <a href="#" class="close" @click.stop="cancel">
          <span>&times;</span>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-8 pr-sm-5">
        <form action enctype="multipart/form-data">
          <InputText v-model="name" :label="'app name'"></InputText>
          <InputFile v-model="logo" :label="'app icon'"></InputFile>
          <InputColor :label="'icon\'s background color'"></InputColor>
          <InputSelect v-model="category" :label="'category'" :options="categories"></InputSelect>
        </form>
      </div>
      <div
        class="col-12 col-sm-6 col-lg-4 pl-sm-5 text-center app-card-preview-container pt-3 pt-sm-0"
      >
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
    cancel () {
      this.$bvModal
        .msgBoxConfirm(
          'Do you really want to close? all your changes will be lost...',
          { okTitle: 'YES', cancelTitle: 'NO', size: 'sm' }
        )
        .then(result => {
          if (result) {
            this.$router.push({ path: '/' })
          }
        })
    },
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
    },
    logo: {
      get () {
        return this.$store.state.newApp.logo
      },
      set (value) {
        this.$store.dispatch('onChangeLogo', value)
      }
    },
    color: {
      get () {
        return this.$store.state.newApp.color
      },
      set (value) {
        this.$store.dispatch('onChangeColor', value)
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
  border-top: 1px solid rgba(0, 0, 0, 0.125);
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
    border-left: 1px solid rgba(0, 0, 0, 0.125);
  }
}
</style>
