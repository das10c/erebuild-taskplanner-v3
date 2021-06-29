export default function ({ store, route }) {
  store.commit('setInteractions', {
    type: 'route',
    path: route.path,
    performance: store.getters.competency,
    timestamp: Date.now(),
  })
}
