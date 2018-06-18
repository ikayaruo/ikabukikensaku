import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import Const from '@/const'

Vue.use(Vuex)

var sortedBukiList = Const.BUKI_LIST.concat().sort((a, b) => {
  if (a.range > b.range) return 1
  else if (a.range < b.range) return -1

  // chrome が retrun 0 の時に元のソート順を維持してくれないために挿入されたクソコードです
  else if (Const.BUKI_LIST.indexOf(a) > Const.BUKI_LIST.indexOf(b)) return 1
  else if (Const.BUKI_LIST.indexOf(a) < Const.BUKI_LIST.indexOf(b)) return -1
  return 0
})

var state = {
  masterData: sortedBukiList,
  displayData: sortedBukiList.concat(),
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
