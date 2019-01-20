import { SET_CHAMPIONS } from './mutations'
import { SET_CHAMPION } from './mutations'
import { SET_UPDATED_CHAMPION } from './mutations'
import { SET_LANGUAGE } from './mutations'
import axios from 'axios'

export const languageActions={
  /*async*/
  getLanguage:({ commit })=>{
    return new Promise(async (resolve, reject) => {
      const res = await axios.post(
        'http://localhost:4000/graphql', {
        query: '{ language }'
      })
      commit({ type: SET_LANGUAGE, language: res.data.data.language})
      resolve()
    })
  }
}

export const championsActions={
  /*async*/
  getChampions:({ commit })=>{
    return new Promise(async (resolve, reject) => {
      const res = await axios.post(
        'http://localhost:4000/graphql', {
          query: `{
            getChampions {
              name
            }
          }`
        })
        commit({ type: SET_CHAMPIONS, champions: res.data.data})
        resolve()
      })
    },
    getChampionByName: ({ commit, state }) => {
      console.log(state)
      return new Promise(async (resolve, reject) => {
        const res = await axios.post('http://localhost:4000/graphql', {
          query: `
          query GetChampionByName($championName: String!) {
            getChampionByName(name: $championName) {
              name
              attackDamage
            }
          }`,
          variables: {
            championName: state.name
          }
        })
        commit({ type: SET_CHAMPION, champion: res.data.data.getChampionByName})
        resolve()
      })
    },
    updateAttackDamage: ({ commit, state }) => {
      console.log(state.name, state.attackDamage)
      return new Promise(async (resolve, reject) => {
        const res = await axios.post('http://localhost:4000/graphql', {
          query: `
          mutation UpdateAttackDamage(
            $championName: String!,  $attackDamage: Float) {
              updateAttackDamage(name: $championName, attackDamage: $attackDamage) {
                name
                attackDamage
              }
            }`,
            variables: {
              championName: state.name,
              attackDamage: state.attackDamage
            }
          })
          commit({ type: SET_UPDATED_CHAMPION, updatedChampion: res.data.data.updateAttackDamage})
          resolve()
      })
    }
  }
