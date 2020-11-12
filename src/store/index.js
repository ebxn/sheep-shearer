import Vue from 'vue'
import Vuex from 'vuex'
import VueXPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VueXPersist({
  storage: window.localStorage
})

const originalSheepData = {
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
}

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
    sheepDrawings: [],
    isResetModalVisible: false
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
      const { type, newOwned } = payload
      state.sheepData[type].owned = newOwned
    },
    SET_SHEEP_DRAWINGS: function (state, payload) {
      state.sheepDrawings = [...state.sheepDrawings, payload]
    },
    SET_RESET_MODAL_VISIBILITY: function (state, payload) {
      state.isResetModalVisible = payload
    },
    RESET_GAME: function (state) {
      state.wool = 0
      state.wps = 0
      state.sheepData = { ...originalSheepData }
      state.sheepDrawings = []
      state.isResetModalVisible = false
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

    resetGame: function ({ commit }) {
      commit('RESET_GAME')
    },

    buySheep: function ({ commit, state }, type) {
      /**
       * this logic will remain here in case of a mind change, but it will allow for
       * adding buy x1, x5 and x10 in the future
       *
       * total price: [...Array(state.buyAmount)].reduce((acc, _, idx) => acc + (sheep.price * (1.15 ** idx)), 0)
       * new price: sheep.price * 1.15 ** state.buyAmount
       */
      const sheep = state.sheepData[type]

      // storing in variable in case of buying in multiples
      const totalPrice = sheep.price

      if (state.wool >= totalPrice) {
        const newWool = state.wool - totalPrice
        commit('SET_WOOL', newWool)

        const newOwned = sheep.owned + 1
        commit('SET_SHEEP_TYPE_OWNED', { newOwned, type })

        const newWps = state.wps + sheep.wps
        commit('SET_WPS', newWps)

        const newPrice = sheep.price * 1.15
        commit('SET_SHEEP_TYPE_PRICE', { newPrice, type })
      }
    },

    sheepClick: function ({ commit, state }) {
      const { wool } = state
      commit('SET_WOOL', wool + 1)
    },

    saveSheepDrawing: function ({ commit }, sheepDrawing) {
      commit('SET_SHEEP_DRAWINGS', sheepDrawing)
    },

    showResetModal: function ({ commit }) {
      commit('SET_RESET_MODAL_VISIBILITY', true)
    },
    closeResetModal: function ({ commit }) {
      commit('SET_RESET_MODAL_VISIBILITY', false)
    }
  },
  getters: {
    getWool: (state) => state.wool,
    getWps: (state) => state.wps,
    getSheepData: (state) => state.sheepData,
    getSheepDrawings: (state) => state.sheepDrawings,
    getIsResetModalVisible: (state) => state.isResetModalVisible
  },
  plugins: [
    vuexLocal.plugin
  ]
})
