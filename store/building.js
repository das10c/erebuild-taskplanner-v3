export const state = () => ({
  colors: [
    { str: 'light-green lighten-3', hex: '#72bb34' },
    { str: 'deep-purple lighten-4', hex: '#8b72b1' },
    { str: 'cyan lighten-4', hex: '#57c0d1' },
    { str: 'red lighten-4', hex: '#ef857c' },
  ],
  goals: [],
  tabs: [],
})

export const getters = {
  goals(state) {
    return state.goals
  },
}

export const mutations = {
  setGoals(state, data) {
    state.goals = data
  },
  setTabs(state, data) {
    state.tabs = data
  },
  checkGoal(state, goalIndex) {
    state.goals[goalIndex].checked = true
    const result = state.goals.every((goal) => {
      return goal.checked
    })
    if (result) {
      state.tabs[0].checked = true
    }
  },
}
