import axios from 'axios'

export const state = () => ({
  places: []
})

export const mutations = {
  setPlaces(state, data) {
    state.places = data
  }
}

export const actions = {
  async fetchPlaces({ commit }) {
    let places
    try {
      places = await this.$axios.$get('/get/obtenerdatoslocal/')
    } catch (error) {
      places = (await axios.get('/locales.json')).data
    }
    commit('setPlaces', places)
  }
}
