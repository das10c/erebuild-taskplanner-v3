export const state = () => ({
  colors: [
    { str: 'light-green lighten-3', hex: '#72bb34' },
    { str: 'deep-purple lighten-4', hex: '#8b72b1' },
    { str: 'cyan lighten-4', hex: '#57c0d1' },
    { str: 'red lighten-4', hex: '#ef857c' },
  ],
  goals: [],
  buildings: [],
  tabs: [],
})

export const getters = {
  goals(state) {
    return state.goals
  },
  buildings(state) {
    return state.buildings
  },
}

export const mutations = {
  setGoals(state, data) {
    state.goals = data
  },
  setBuildings(state, data) {
    state.buildings = data
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
      state.buildings[0].checked = true
      state.tabs[0].checked = true
    }
  },
  checkModule(state, moduleId) {
    const building = state.buildings[0]
    const modules = building.children
    let res
    modules.forEach((module) => {
      if (module.id === moduleId) res = module
      else if ('children' in module) {
        module.children.forEach((subModule) => {
          if (subModule.id === moduleId) res = subModule
          else if ('children' in subModule) {
            subModule.children.forEach((block) => {
              if (block.id === moduleId) res = block
            })
          }
        })
      }
    })
    res.checked = true
    const result = building.children.every((module) => {
      if ('children' in module) {
        const resModule = module.children.every((subModule) => {
          if ('children' in subModule) {
            const resSubModule = subModule.children.every((block) => {
              return block.checked
            })
            return resSubModule && subModule.checked
          }
          return subModule.checked
        })
        return resModule && module.checked
      } else {
        return module.checked
      }
    })
    if (result) {
      state.tabs[1].checked = true
    }
  },
  checkPlanning(state, moduleId) {
    const building = state.buildings[0]
    const modules = building.children
    let res
    modules.forEach((module) => {
      if (module.id === moduleId) res = module
      else if ('children' in module) {
        module.children.forEach((subModule) => {
          if (subModule.id === moduleId) res = subModule
          else if ('children' in subModule) {
            subModule.children.forEach((block) => {
              if (block.id === moduleId) res = block
            })
          }
        })
      }
    })
    res.completed = true
    const result = building.children.every((module) => {
      if ('children' in module) {
        const resModule = module.children.every((subModule) => {
          if ('children' in subModule) {
            const resSubModule = subModule.children.every((block) => {
              return block.completed
            })
            return resSubModule && subModule.completed
          }
          return subModule.completed
        })
        return resModule && module.completed
      } else {
        return module.completed
      }
    })
    if (result) {
      state.tabs[2].checked = true
    }
  },
}
