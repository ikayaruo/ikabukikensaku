export const mutations = {
  SET_SEARCH_CONDITIONS: (state, payload) => {
    Object.assign(state.searchConditions, payload)
  },
  SET_DISPLAY_DATA: (state, payload) => {
    var subweapon = state.searchConditions.subweapon
    var special = state.searchConditions.special

    if (subweapon === '' && special === '') {
      state.displayData = state.masterData.concat()
    } else {
      state.displayData = state.masterData.filter(buki => {
        if (subweapon === '') {
          if (buki.special.indexOf(special) > -1) return buki
        } else if (special === '') {
          if (buki.subweapon.indexOf(subweapon) > -1) return buki
        } else {
          if (buki.subweapon.indexOf(subweapon) > -1 && buki.special.indexOf(special) > -1) return buki
        }
      })
    }
  }
}
