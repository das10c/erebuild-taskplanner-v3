export const state = () => ({
  colors: [
    { str: 'deep-purple lighten-4', hex: '#8b72b1' },
    { str: 'cyan lighten-4', hex: '#57c0d1' },
    { str: 'red lighten-4', hex: '#ef857c' },
    { str: 'light-green lighten-3', hex: '#72bb34' },
  ],
  collectibles: [],
  tabs: [],
})

export const getters = {
  getTabs(state, getters, rootState) {
    return [
      {
        name: 'Collecting Information',
        to: `/${rootState.level}/collecting/information-collected`,
        checked: false,
      },
    ]
  },
  collectibles(state) {
    return state.collectibles
  },
  collectiblesLength(state) {
    return state.collectibles.length
  },
  occupantMemberLength(state) {
    if (state.collectibles[0].type === 'group') {
      return state.collectibles[0].members.length
    }
    return 0
  },
}

export const mutations = {
  setCollectibles(state, data) {
    state.collectibles = data
  },
  setTabs(state, data) {
    state.tabs = data
  },
  checkCollectible(state, index) {
    state.collectibles[index].checked = true
  },
  checkMember(state, { itemIndex, memberIndex }) {
    state.collectibles[itemIndex].members[memberIndex].checked = true
  },
  checkMemberProperty(state, { itemIndex, memberIndex, propertyKey }) {
    const member = state.collectibles[itemIndex].members[memberIndex]
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
  checkProperty(state, { itemIndex, propertyKey }) {
    const collectible = state.collectibles[itemIndex]
    const props = collectible.properties
    const propsArr = Object.values(collectible.properties)
    const property = props[propertyKey]
    property.checked = true
    const result = propsArr.every((prop) => {
      return prop.checked
    })
    if (result) {
      collectible.checked = true
    }
    const completed = state.collectibles.every((item) => {
      return item.checked
    })
    if (completed) {
      state.tabs[0].checked = true
    }
  },
}
