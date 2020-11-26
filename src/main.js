import Vue from 'vue'
import App from './App'

import uView from 'uview-ui'

import store from '@/common/store'
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
