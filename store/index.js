export const state = () => ({
  userToken: '',
  level: '',
  tabs: [],
  interactions: [],
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
    if (userTokenStr) state.userToken = userTokenStr
  },
  setInteractions(state, data) {
    state.interactions.push(data)
  },
}
