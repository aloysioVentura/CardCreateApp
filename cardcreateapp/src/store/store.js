import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newApp: {
      name: '',
      category: '',
      logo: null,
      color: ''
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
    }
  },
  getters: {
    name: state => state.newApp.name,
    category: state => state.newApp.category,
    logo: state => state.newApp.logo,
    collor: state => state.newApp.color
  }
})
