export const state = () => ({
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
}

export const mutations = {
  setLevel(state, levelStr) {
    state.level = levelStr
  },
  setTabs(state, actionList) {
    state.tabs = actionList
  },
}
