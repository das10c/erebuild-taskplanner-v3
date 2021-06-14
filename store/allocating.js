export const state = () => ({
  colors: [
    { str: 'deep-purple lighten-4', hex: '#8b72b1' },
    { str: 'cyan lighten-4', hex: '#57c0d1' },
    { str: 'red lighten-4', hex: '#ef857c' },
    { str: 'light-green lighten-3', hex: '#72bb34' },
  ],
  occupants: [],
  dwellings: [],
  tabs: [],
})

export const getters = {
  lightColor(state, colorIndex) {
    return state.colors[colorIndex].string
  },
  deepColor(state, colorIndex) {
    return state.colors[colorIndex].hex
  },
  getLevel(state) {
    return state.level
  },
  getOccupants(state) {
    return state.occupants
  },
  occupantsLength(state) {
    return state.occupants.length
  },
  occupantMemberLength(state) {
    if (state.occupants[0].type === 'group') {
      return state.occupants[0].members.length
    }
    return 0
  },
  getDwellings(state) {
    return state.dwellings
  },
  occupantsForPractice: (state, getters, rootState) => {
    return state.occupants.map((item, index) => ({
      id: index + 1,
      name: item.name,
      color: state.colors[index].hex,
      count: item.properties.count.value,
      unitSpace: item.properties.unitSpace.value,
      cloneId: 0,
      initialCount: item.properties.count.value,
    }))
  },
  containersForPractice: (state) => {
    const containers = []
    const dwelling = state.dwellings[0]
    const properties = dwelling.properties
    for (let i = 0; i < properties.count.value; i++) {
      containers.push({
        id: i + 1,
        name: dwelling.name,
        color: 'primary',
        unitSpace: properties.unitSpace.value * properties.acceptableRate.value,
        measuringUnit: properties.unitSpace.measuringUnit,
        occupants: [],
      })
    }
    return containers
  },
}

export const mutations = {
  checkPhase(state, phaseIndex) {
    state.tabs[phaseIndex].checked = true
  },
  setOccupants(state, data) {
    state.occupants = data
  },
  setDwellings(state, data) {
    state.dwellings = data
  },
  setTabs(state, data) {
    state.tabs = data
  },
  checkOccupant(state, occupantIndex) {
    state.occupants[occupantIndex].checked = true
  },
  checkMember(state, { occupantIndex, memberIndex }) {
    state.occupants[occupantIndex].members[memberIndex].checked = true
  },
  checkMemberProperty(state, { occupantIndex, memberIndex, propertyKey }) {
    const member = state.occupants[occupantIndex].members[memberIndex]
    const props = member.properties
    const propsArr = Object.values(member.properties)
    const property = props[propertyKey]
    property.checked = true
    const result = propsArr.every((prop) => {
      return prop.checked
    })
    if (result) {
      member.checked = true
    }
  },
  checkProperty(state, { occupantIndex, propertyKey }) {
    const occupant = state.occupants[occupantIndex]
    const props = occupant.properties
    const propsArr = Object.values(occupant.properties)
    const property = props[propertyKey]
    property.checked = true
    const result = propsArr.every((prop) => {
      return prop.checked
    })
    if (result) {
      occupant.checked = true
    }
    const completed = state.occupants.every((person) => {
      return person.checked
    })
    if (completed) {
      state.tabs[0].checked = true
    }
  },
  checkMathValues(state, { dwellingIndex, valueKey }) {
    const dwelling = state.dwellings[dwellingIndex]
    const mathValues = dwelling.mathValues
    mathValues[valueKey].checked = true
  },
  checkDwellingProperty(state, { dwellingIndex, propertyKey }) {
    const dwelling = state.dwellings[dwellingIndex]
    const props = dwelling.properties
    const propsArr = Object.values(dwelling.properties).filter(
      (prop) => prop.required === true
    )
    props[propertyKey].checked = true
    const result = propsArr.every((prop) => {
      return prop.checked
    })
    if (result) {
      dwelling.checked = true
    }
    const completed = state.dwellings.every((item) => {
      return item.checked
    })
    if (completed) {
      state.tabs[1].checked = true
    }
  },
}
