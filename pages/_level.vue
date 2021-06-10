<template>
  <v-app>
    <v-system-bar app window dark color="primary">
      <v-icon color="white">mdi-file-tree-outline</v-icon>
      <span class="white--text font-weight-medium mr-2">
        {{ appTitle }}: {{ gameLevel }}
      </span>
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-account-circle-outline</v-icon>
      <span class="white--text font-weight-medium">{{ userToken }}</span>
    </v-system-bar>
    <v-navigation-drawer app permanent width="90">
      <v-list dense nav class="pa-0 mt-8">
        <v-list-item-group color="indigo" mandatory>
          <v-list-item
            v-for="(action, index) in tabs"
            :key="'action-tab-' + index"
            :nuxt="true"
            :to="action.link"
          >
            <v-list-item-content>
              <v-list-item-title style="font-size: 0.75rem">
                {{ action.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt-child keep-alive></nuxt-child>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Level',
  data: () => ({
    appTitle: 'Task Planner',
    userToken: '',
    gameLevel: '',
    actions: [],
  }),
  computed: {
    tabs() {
      return this.actions.map((action) => ({
        title: action.toUpperCase(),
        link: `/${this.gameLevel}/${action}/`,
      }))
    },
  },
  beforeCreate() {
    const levelStr = this.$route.params.level
    if (levelStr) {
      this.$store.commit('setLevel', levelStr)
    }
  },
  created() {
    const levelName = this.$store.getters.level
    const actions = this.$store.getters['data/planners'](levelName)
    if (levelName) this.gameLevel = levelName
    if (actions.length > 0) this.actions = actions
  },
}
</script>

<style scoped></style>
