import Vue from 'vue'
import Vuex from 'vuex'
import VueXPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VueXPersist({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    wool: 0,
    wps: 0,
    gameInterval: null,
    sheepData: {
      standard: {
        name: 'Standard',
        type: 'standard',
        price: 15,
        wps: 0.1,
        owned: 0
      },
      purebred: {
        name: 'Purebred',
        type: 'purebred',
        price: 100,
        wps: 0.5,
        owned: 0
      },
      gm: {
        name: 'G.M.',
        type: 'gm',
        price: 500,
        wps: 2,
        owned: 0
      },
      robot: {
        name: 'Robot',
        type: 'robot',
        price: 3000,
        wps: 10,
        owned: 0
      },
      mutant: {
        name: 'Mutant',
        type: 'mutant',
        price: 10000,
        wps: 40,
        owned: 0
      },
      alien: {
        name: 'Alien',
        type: 'alien',
        price: 40000,
        wps: 100,
        owned: 0
      },
      interdimensional: {
        name: 'Sheep?',
        type: 'interdimensional',
        price: 200000,
        wps: 400,
        owned: 0
      },
      zalgo: {
        name: 'Sh̢̫̟̖̑ȅe̐͛̎̉̅ͯͯ́p̸̽',
        type: 'zalgo',
        price: 1666666,
        wps: 6666,
        owned: 0
      }
    },
    sheepDrawings: []
  },
  mutations: {
    SET_GAME_INTERVAL: function (state, payload) {
      state.gameInterval = payload
    },
    CLEAR_GAME_INTERVAL: function (state) {
      clearInterval(state.gameInterval)
    },
    SET_WOOL: function (state, payload) {
      state.wool = payload
    },
    SET_WPS: function (state, payload) {
      state.wps = payload
    },
    SET_SHEEP_TYPE_PRICE: function (state, payload) {
      const { type, newPrice } = payload
      state.sheepData[type].price = newPrice
    },
    SET_SHEEP_TYPE_OWNED: function (state, payload) {
      const { type, newAmountOwned } = payload
      state.sheepData[type].owned = newAmountOwned
    },
    SET_SHEEP_DRAWINGS: function (state, payload) {
      state.sheepDrawings = [...state.sheepDrawings, payload]
    }
  },
  actions: {
    startGame: function ({ commit, state }) {
      const gameInterval = setInterval(() => {
        const { wool, wps } = state
        const newWool = Number((wool + wps).toFixed(1))
        commit('SET_WOOL', newWool)
      }, 1000)
      commit('SET_GAME_INTERVAL', gameInterval)
    },

    _debug_StopGame: function ({ commit }) {
      commit('CLEAR_GAME_INTERVAL')
    },

    buySheep: function ({ commit, state }, type) {
      const { wool, wps, sheepData } = state
      const { wps: sheepWps, price: sheepPrice, owned: sheepOwned } = sheepData[type]

      if (wool >= sheepPrice) {
        const newWool = wool - sheepPrice
        commit('SET_WOOL', newWool)

        const newAmountOwned = sheepOwned + 1
        commit('SET_SHEEP_TYPE_OWNED', { type, newAmountOwned })

        const newWps = Number((wps + sheepWps).toFixed(1))
        commit('SET_WPS', newWps)

        const newPrice = Math.floor(sheepPrice * 1.15)
        commit('SET_SHEEP_TYPE_PRICE', { type, newPrice })
      }
    },

    sheepClick: function ({ commit, state }) {
      const { wool } = state
      commit('SET_WOOL', wool + 1)
    },

    saveSheepDrawing: function ({ commit }, sheepDrawing) {
      commit('SET_SHEEP_DRAWINGS', sheepDrawing)
    }
  },
  getters: {
    getWool: (state) => Math.floor(state.wool).toLocaleString(),
    getWps: (state) => Number(state.wps).toLocaleString(),
    getSheepData: (state) => state.sheepData,
    getSheepDrawings: (state) => state.sheepDrawings
  },
  plugins: [
    vuexLocal.plugin
  ]
})
