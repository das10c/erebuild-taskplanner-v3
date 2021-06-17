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
    gameLevel: '',
    actions: [],
    taskPlannerEvents: [],
  }),
  computed: {
    tabs() {
      return this.actions.map((action) => ({
        title: action.toUpperCase(),
        link: `/${this.gameLevel}/${action}/`,
      }))
    },
    userToken() {
      return this.$store.getters.userToken
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
  beforeMount() {
    // window.addEventListener('message', this.sendPanelLogs)
  },
  destroyed() {
    // window.removeEventListener('message', this.sendPanelLogs)
  },
  methods: {
    getHeaders() {
      return {
        'X-CSRFToken': this.getCookie('csrftoken'),
        credentials: 'same-origin',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers':
          'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      }
    },
    async sendOpenLogs(userToken, gameLevel) {
      return await this.$axios.get(`/panel/open/${gameLevel}/${userToken}`, {
        headers: this.getHeaders,
      })
    },
    async sendCloseLogs(userToken, gameLevel) {
      return await this.$axios.get(`/panel/close/${gameLevel}/${userToken}`, {
        headers: this.getHeaders,
      })
    },
    async sendTaskPlannerRecords(data) {
      return await this.$axios.post(`/panel/save/`, JSON.stringify(data), {
        headers: this.getHeaders,
      })
    },
    getCookie(name) {
      let cookieValue = null
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim()
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
            break
          }
        }
      }
      return cookieValue
    },
    sendPanelLogs(event) {
      const userEmail = event.data.user_email
      this.$store.commit('setUserToken', userEmail)

      if (event.data.status === 'OPEN') {
        this.sendOpenLogs(userEmail, this.gameLevel)
      } else if (event.data.status === 'CLOSE') {
        this.sendCloseLogs(userEmail, this.gameLevel)
        const data = {
          user_token: userEmail,
          game_level: this.gameLevel,
          data: this.$store.state.interactions,
        }
        this.sendTaskPlannerRecords(data)
      }
    },
  },
}
</script>

<style scoped></style>
