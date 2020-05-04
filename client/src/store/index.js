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
    },
    updateScript (state, script) {
      const room = state.rooms.find(t => (+t.id) === (+script.id))
      room.script = script.script
    }
  },
  actions: {
    createRoom ({ commit }, room) {
      commit('createRoom', room)
    },
    updateScript ({ commit }, script) {
      commit('updateScript', script)
    }
  },
  getters: {
    rooms: s => s.rooms,
    roomById: s => id => s.rooms.find(t => (+t.id) === (+id)),
    returnsById: s => id => {
      const room = s.rooms.find(t => (+t.id) === (+id))
      room.returns = `return ${room.script}`
      return room.returns
    }
  },
  modules: {}
})
