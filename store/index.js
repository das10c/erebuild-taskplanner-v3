export const state = () => ({
  userToken: '',
  level: '',
  performance: {},
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
    return state.performance
  },
  competency(state) {
    const failedTrials = state.performance.failedTrials
    const longerThanAvg = state.performance.longerThanAvg
    if (failedTrials >= 3 || longerThanAvg === 1) {
      return 'beginner'
    } else {
      return 'intermediate'
    }
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
    if (performanceData) state.performance = performanceData
  },
  setInteractions(state, data) {
    state.interactions.push(data)
  },
  emptyInteractions(state) {
    state.interactions = []
  },
}
