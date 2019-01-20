<template>
  <div id="app">
    <h3>Example 1</h3>
    <div>
      Data: {{ language }}
    </div>
    <button @click="getLanguage">Get Language</button>
    <hr />
    <h3>Example 2</h3>
    <div>
      Data:
      <div v-for="champion in champions">
        {{ champion }}
      </div>
    </div>
    <button @click="getChampions">Get Champions</button>
    <hr>
    <h3>Example 3</h3>
    Name: <input v-model="vName">
    <div>
      Data:
      {{ champion }}
    </div>
    <button @click="getChampionByName">Get Champion</button>
    <hr />
    <h3>Example 4</h3>
    Name: <input v-model="vName">
    Attack Damage: <input v-model.number="vAtkDmg">
    <div>
      Data:
      {{ updatedChampion }}
    </div>
    <button @click="updateAttackDamage">Update Champion</button>
    <hr />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    /*updateName(e) {
      console.log(e.target.value)
      this.$store.commit('SET_NAME', e.taget.value)
    },
    updateAtkDmg(e) {
      console.log(+e.target.value)
      this.$store.commit('SET_ATTACK_DAMAGE', +e.taget.value)
    },*/
    ...mapActions('Language', {
      getLanguage: 'getLanguage'
    }),
    ...mapActions('Champion', {
      getChampions: 'getChampions',
      getChampionByName: 'getChampionByName',
      updateAttackDamage: 'updateAttackDamage'
    }),
  },
  computed: {
    vName: {
      get () {
        console.log(this.name)
        return this.name
      },
      set (value) {
        this.$store.commit({ type: 'Champion/SET_NAME', name: value })
      }
    },
    vAtkDmg: {
      get () {
        return this.attackDamage
      },
      set (value) {
        this.$store.commit({ type: 'Champion/SET_ATTACK_DAMAGE', atkDmg: value })
      }
    },
    ...mapState('Language', {
      languageS: state => state.language
    }),
    ...mapState('Champion', {
      championsS: state => state.champions,
      nameS: state => state.name,
      attackS: state => state.attackDamage,
      championS: state => state.champion,
      updatedChampionS: state => state.updatedChampion
    }),
    ...mapGetters('Language', {
      language: 'getLanguage'
    }),
    ...mapGetters('Champion', {
      champions: 'getChampions',
      champion: 'getChampion',
      name: 'getName',
      attackDamage: 'getAttackDamage',
      updatedChampion: 'getUpdatedChampion'
    })
  }
}
</script>
