import Vue from 'vue'

import uView from 'uview-ui'

import store from '@/common/store'
import App from './App'

import { router, RouterMount } from './router'

Vue.use(router)
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount()
// #endif
