export default {
  authenticated: (state) => {
    return state.token !== null
  },

  selectedId: (state) => {
    return state.selectedId
  },

  isEditting: (state) => {
    return 'status' + state.isEditting
  }
}
