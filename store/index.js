export const state = () => ({
  userToken: '',
  level: '',
  tabs: [],
})

export const getters = {
  level(state) {
    return state.level
  },
  tabs(state) {
    return state.tabs
  },
  userToken(state) {
    return state.userToken
  },
}

export const mutations = {
  setLevel(state, levelStr) {
    state.level = levelStr
  },
  setTabs(state, actionList) {
    state.tabs = actionList
  },
  setUserToken(state, userTokenStr) {
    state.userToken = userTokenStr
  },
}
