export default function ({ store, route }) {
  store.commit('setInteractions', {
    type: 'route',
    path: route.path,
    timestamp: Date.now(),
  })
}
