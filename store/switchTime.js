export const state = () => ({
  selectedTime: 'today'
})

export const getters = {
  getSelectedTime(state) {
    return state.selectedTime
  }
}

export const mutations = {
  SET_SELECTED_TIME (state, payload) {
    state.selectedTime = payload
  }
}

export const actions = {
  setSelectedTime ({ commit }, payload) {
    commit('SET_SELECTED_TIME', payload)
  }
}
