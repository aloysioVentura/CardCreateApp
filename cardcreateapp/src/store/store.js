import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newApp: {
      name: '',
      category: '',
      logo: null,
      color: '#191919'
    },
    apps: []
  },
  mutations: {
    changeName (state, name) {
      state.newApp.name = name
    },
    changeCategory (state, category) {
      state.newApp.category = category
    },
    changeColor (state, color) {
      state.newApp.color = color
    },
    changeLogo (state, logo) {
      state.newApp.logo = logo
    },
    clearNewApp (state) {
      state.newApp = {
        name: '',
        category: '',
        logo: null,
        color: '#191919'
      }
    },
    finishAppCreate (state) {
      state.apps.push({ ...state.newApp })
      state.newApp = {
        name: '',
        category: '',
        logo: null,
        color: '#191919'
      }
    }
  },
  actions: {
    onChangeName ({ commit }, name) {
      commit('changeName', name)
    },
    onChangeCategory ({ commit }, category) {
      commit('changeCategory', category)
    },
    onChangeColor ({ commit }, color) {
      commit('changeColor', color)
    },
    onChangeLogo ({ commit }, logo) {
      commit('changeLogo', logo)
    },
    onLeaveAppCreate ({ commit }) {
      commit('clearNewApp')
    },
    onFinishAppCreate ({ commit }, app) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(app)
          commit('finishAppCreate')
          resolve()
        }, 1000)
      })
    }
  },
  getters: {
    name: state => state.newApp.name,
    category: state => state.newApp.category,
    logo: state => state.newApp.logo,
    color: state => state.newApp.color,
    isNewAppValid: state => {
      return state.newApp.name && state.newApp.category && state.newApp.logo && state.newApp.color
    }
  }
})
