export const state = () => ({
  userToken: '',
  level: '',
  performanceData: {},
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
  performance(state) {
    return state.performanceData
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
  setPerformance(state, performanceData) {
    if (performanceData) state.performanceData = performanceData
  },
  setInteractions(state, data) {
    state.interactions.push(data)
  },
  emptyInteractions(state) {
    state.interactions = []
  },
}
