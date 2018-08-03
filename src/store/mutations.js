export const mutations = {
  SET_SEARCH_CONDITIONS: (state, payload) => {
    Object.assign(state.searchConditions, payload)
  },
  SET_DISPLAY_DATA: (state, payload) => {
    var subweapon = state.searchConditions.subweapon
    var special = state.searchConditions.special
    var bomb = state.searchConditions.bomb

    if (subweapon === '' && special === '') {
      state.displayData = state.masterData.concat()
    } else {
      state.displayData = state.masterData.filter(buki => {
        if (special === '') {
          if (buki.subweapon === subweapon) return buki
        } else if (subweapon === '') {
          if (bomb === '') {
            if (buki.special.indexOf(special) > -1) return buki
          } else {
            if (buki.special === bomb + special) return buki
          }
        } else {
          if (bomb === '') {
            if (buki.subweapon === subweapon && buki.special.indexOf(special) > -1) return buki
          } else {
            if (buki.subweapon === subweapon && buki.special === bomb + special) return buki
          }
        }
      })
    }
  }
}
