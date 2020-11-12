import * as types from './mutation-type'

export default {
  [types.SET_LOGINED](state) {
    state.logined = true
  },

  [types.REMOVE_LOGINED](state) {
    state.logined = false
    state.user = null
  },

  [types.SET_USER](state, payload) {
    state.user = payload
  }

}
