import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import Language from './modules/Language'
import Champion from './modules/Champion'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Language,
    Champion
  },
  strict: debug
})
