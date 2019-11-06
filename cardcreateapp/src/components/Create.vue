<template>
  <div class="card p-3 p-md-5 app-card-create">
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
      <div class="col-12 col-sm-6 col-md-8 pr-md-5">
        <b-alert v-model="showAlert" variant="danger" dismissible>Fill the missing inputs...</b-alert>
        <form enctype="multipart/form-data">
          <InputText
            v-model="name"
            :placeholder="'Enter App Display Name'"
            :required="true"
            :label="'app name'"
          ></InputText>
          <InputFile v-model="logo" :label="'app icon'"></InputFile>
          <InputColor v-model="color" :label="'icon\'s background color'"></InputColor>
          <InputSelect v-model="category" :label="'category'" :options="categories"></InputSelect>
        </form>
      </div>
      <div
        class="col-12 col-sm-6 col-md-4 pl-md-5 text-center app-card-preview-container pt-3 pt-sm-0"
        :class="isMobile ? 'fix-bottom' : ''"
      >
        <div class="text-left">
          <label>
            <strong>APP'S CARD PREVIEW</strong>
          </label>
        </div>
        <CardPreview :app="app"></CardPreview>
        <button class="btn btn-primary mt-4 app-btn-create" @click="finish">SAVE APP</button>
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
            this.$store.dispatch('onLeaveAppCreate')
            this.$router.push({ path: '/' })
          }
        })
    },
    finish () {
      this.showAlert = false
      if (this.isValid) {
        this.$store
          .dispatch('onFinishAppCreate', this.$store.state.newApp)
          .then(() => {
            this.$router.push({ path: '/success' })
          })
      } else {
        this.showAlert = true
      }
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
      ],
      showAlert: false
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
    },
    isValid () {
      return this.$store.getters.isNewAppValid
    },
    isMobile () {
      return this.$store.getters.isMobileAccess
    },
    app () {
      return this.$store.state.newApp
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
.fix-bottom{
  position: sticky;
  background-color: white;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999
}
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
  min-height: 100vh;
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
    max-width: 946px;
    width: calc(100vw - 2rem);
    height: auto;
    min-height: 0
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
