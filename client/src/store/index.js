import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    createRoom (state, room) {
      state.rooms.push(room)
    }
  },
  actions: {
    createRoom ({ commit }, room) {
      commit('createRoom', room)
    }
  },
  getters: {
    rooms: s => s.rooms,
    roomById: s => id => s.rooms.find(t => t.id === id)
  },
  modules: {
  }
})
