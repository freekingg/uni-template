import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mutations from './mutation'
import state from './state'
import * as getters from './getter'
import actions from './action'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: debug ? [createLogger()] : [],
  strict: debug
})
