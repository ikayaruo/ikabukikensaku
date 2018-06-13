import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import Const from '@/const'

Vue.use(Vuex)

var state = {
  masterData: Const.BUKI_LIST,
  displayData: Const.BUKI_LIST,
  searchConditions: {
    subweapon: '',
    special: ''
  }
}

var getters = {
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})
