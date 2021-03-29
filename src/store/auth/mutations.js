/* eslint-disable */

export default {
    login(state, token) {
        if (token) {
            state.token = token
        }
    }
}