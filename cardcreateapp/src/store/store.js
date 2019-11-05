import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

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
    },
    updateApps (state, apps) {
      state.apps = apps
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
      let key
      firebase.database().ref('apps').push(app)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const fileName = app.logo.name
          const ext = fileName.slice(fileName.lastIndexOf('.'))
          return firebase.storage().ref('logos/' + key + '.' + ext).put(app.logo)
        })
        .then(fileData => {
          return firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
        })
        .then(imageUrl => {
          app.logo = { 'name': app.logo.name, 'url': imageUrl }
          return firebase.database().ref('apps').child(key).update({ logo: { 'name': app.logo.name, 'url': imageUrl } })
        }).then(() => {
          commit('finishAppCreate')
        })
    },
    onLoadApps  ({ commit }) {
      firebase.database().ref('apps').once('value')
        .then((data) => {
          const apps = []
          const obj = data.val()
          for (let key in obj) {
            apps.push({
              name: obj[key].name,
              category: obj[key].category,
              logo: obj[key].logo,
              color: obj[key].color
            })
            commit('updateApps', apps)
          }
        })
    }
  },
  getters: {
    apps: state => state.apps,
    name: state => state.newApp.name,
    category: state => state.newApp.category,
    logo: state => state.newApp.logo,
    color: state => state.newApp.color,
    isNewAppValid: state => {
      return state.newApp.name && state.newApp.category && state.newApp.logo && state.newApp.color
    }
  }
})
