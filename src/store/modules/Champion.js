import { SET_NAME } from '../mutations'
import { SET_CHAMPIONS } from '../mutations'
import { SET_CHAMPION } from '../mutations'
import { SET_UPDATED_CHAMPION } from '../mutations'
import { SET_ATTACK_DAMAGE } from '../mutations'
import * as actions from '../actions'

export default{
  namespaced: true,
  state: {
    champions: [],
    champion: null,
    name: '',
    attackDamage: 5.5,
    updatedChampion: null
  },
  getters: {
    getChampions: (state)=>{
      return state.champions
    },
    getChampion: (state)=>{
      return state.champion
    },
    getName: (state) => {
      return state.name
    },
    getAttackDamage: (state) => {
      return state.attackDamage
    },
    getUpdatedChampion: (state)=>{
      return state.updatedChampion
    }
  },
  actions:actions.championsActions,
  mutations : {
    [SET_NAME](state, payload) {
      state.name = payload.name
      console.log(state.name)
    },
    [SET_ATTACK_DAMAGE](state, payload) {
      state.attackDamage = payload.atkDmg
    },
    [SET_CHAMPIONS](state, payload) {
      state.champions = payload.champions
    },
    [SET_CHAMPION](state, payload) {
      state.champion = payload.champion
    },
    [SET_UPDATED_CHAMPION](state, payload) {
      state.updatedChampion = payload.updatedChampion
    }

  }
}
