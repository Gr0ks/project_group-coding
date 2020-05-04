import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: {}
  },
  mutations: {},
  actions: {
    async getRooms (s) {
      try {
        const response = await fetch('http://192.168.0.14:9980/api/rooms', {
          method: 'GET',
          headers: {},
          mode: 'no-cors'
        })
        const rooms = await response.json()
        return rooms
      } catch (e) {
        console.warn(`Error: ${e}`)
      }
    },
    async getRoomById (s, id) {
      try {
        const response = await fetch(`http://192.168.0.14:9980/api/room/${id}`, {
          method: 'GET',
          headers: {},
          mode: 'no-cors'
        })
        const room = await response.json()
        return room
      } catch (e) {
        console.warn(`Error: ${e}`)
      }
    },
    async getReturnsById (s, id) {
      try {
        const response = await fetch(`http://192.168.0.14:9980/api/runScript/${id}`, {
          method: 'GET',
          headers: {},
          mode: 'no-cors'
        })
        const room = await response.json()
        return room.returns
      } catch (e) {
        console.warn(`Error: ${e}`)
      }
    },
    async createRoom (s, room) {
      try {
        const headers = {}
        headers['Content-Type'] = 'application/json'
        const body = JSON.stringify(room)
        await fetch('http://192.168.0.14:9980/api/room', {
          method: 'POST',
          headers,
          body
        })
      } catch (e) {
        console.log(`Error: ${e}`)
      }
    },
    async updateScript (s, script) {
      try {
        const headers = {}
        headers['Content-Type'] = 'application/json'
        const body = JSON.stringify(script)
        const response = await fetch(`http://192.168.0.14:9980/api/room/${script.id}`, {
          method: 'POST',
          mode: 'no-cors',
          headers,
          body
        })
        return await response.json()
      } catch (e) {
        console.warn(`Error: ${e}`)
      }
    }
  },
  getters: {},
  modules: {}
})
