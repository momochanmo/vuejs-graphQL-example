import { SET_LANGUAGE } from '../mutations'
import * as actions from '../actions'

export default{
  namespaced: true,
  state: {
    language: ''
  },
  getters: {
    getLanguage: (state) => {
      return state.language
    }
  },
  actions:actions.languageActions,
  mutations : {
    [SET_LANGUAGE](state,payload){
      state.language = payload.language
    }
  }
}
