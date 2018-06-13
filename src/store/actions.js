export const actions = {
  filterDisplayData: (context, payload) => {
    context.commit('SET_SEARCH_CONDITIONS', payload)
    context.commit('SET_DISPLAY_DATA', payload)
  }
}
