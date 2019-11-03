import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newApp: {
      name: 'company',
      category: '',
      logo: undefined,
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
    }
  },
  actions: {
    onChangeName ({ commit }, name) {
      commit('changeName', name)
    },
    onChangeCategory ({ commit }, category) {
      commit('changeCategory', category)
    }
  },
  getters: {
    name: state => state.newApp.name,
    category: state => state.newApp.category
  }
})
