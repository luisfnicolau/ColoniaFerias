import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import VuexPersist from 'vuex-persist/dist/index'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

import Constants from '../utility/constants'

// localStorage.removeItem('vuex')

export const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    news: [
      {
        imageUrl: 'https://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg',
        id: 'first',
        title: 'Title First'
      },
      {
        imageUrl: 'https://www.timeshighereducation.com/sites/default/files/istock-499343530.jpg',
        id: 'second',
        title: 'Title Second'
      }
    ],
    colonies: [],
    plans: [
      // {
      //   id: 1,
      //   price: 5990,
      //   period: Constants.MORNING,
      //   num_of_days: 7,
      // },
      // {
      //   id: 2,
      //   price: 5990,
      //   period: Constants.AFTERNOON,
      //   num_of_days: 7,
      // },
      // {
      //   id: 3,
      //   price: 5990 * 2,
      //   period: Constants.WHOLE,
      //   num_of_days: 7,
      // },
      // {
      //   id: 4,
      //   price: 990,
      //   period: Constants.MORNING,
      //   num_of_days: 7,
      // },
      // {
      //   id: 5,
      //   price: 990,
      //   period: Constants.AFTERNOON,
      //   num_of_days: 7,
      // },
      // {
      //   id: 6,
      //   price: 990 * 2,
      //   period: Constants.WHOLE,
      //   num_of_days: 7,
      // },
    ],
    selectedColony: '',
    selectedPlans: '',
  },
  mutations: {
    addColony (state, payload) {
      state.colonies.push(payload)
    },
    setSelectedColony (state, payload) {
      state.selectedColony = payload
    },
    setSelectedPlans (state, payload) {
      state.selectedPlans = payload
    }
  },
  actions: {
    CreateColony ({commit}, payload) {
      commit('addColony', payload)
    },
    selectColony ({commit}, payload) {
      commit('setSelectedColony', payload)
    },
    setCreatePlans({commit}, payload) {
      commit('setSelectedPlans', payload)
    }
  },
  getters: {
    messages (state) {
      return state.messages.sort((messageA, messageB) => {
        return messageA.sent > messageB.sent
      })
    },
    selectedPlans (state) {
      return state.selectedPlans
    },
    colonies (state) {
      return state.colonies
    },
    selectedColony (state) {
      return state.selectedColony
    }
  }
})
