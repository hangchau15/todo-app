/* eslint-disable */
export default {
    loggedIn: (state) => {
        return state.token !== null
    },
    selectedId: (state) => {
        return state.selectedId
    }
}