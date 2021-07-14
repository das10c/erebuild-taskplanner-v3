<template>
  <v-container fluid class="py-0 px-0">
    <v-system-bar window dark :color="systemBar.color">
      <v-icon color="white">{{ systemBar.icon }}</v-icon>
      <span class="white--text font-weight-medium mr-2">{{
        systemBar.title
      }}</span>
    </v-system-bar>
    <v-tabs
      v-model="currentTab"
      height="32"
      centered
      fixed-tabs
      :background-color="tabColor"
    >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="'tab-' + index"
        :nuxt="true"
        :to="tab.to"
        style="font-size: 11px"
        >{{ index + 1 }}: {{ tab.name }}
        <v-badge
          :color="tab.checked ? 'primary' : ''"
          :icon="tab.checked ? 'mdi-check' : ''"
        ></v-badge>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="(tab, index) in tabs"
        :key="'tabItem-' + index"
        :value="tab.to"
      >
        <v-card>
          <nuxt-child keep-alive></nuxt-child>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  name: 'Allocating',
  data() {
    return {
      currentTab: 0,
      tabColor: 'light-blue lighten-4',
      systemBar: {
        color: 'light-blue',
        icon: 'mdi-home-group',
        title: 'Allocating',
      },
    }
  },
  computed: {
    tabs() {
      return this.$store.state.allocating.tabs
    },
    competency() {
      return this.$store.getters.competency
    },
  },
  watch: {
    competency(value) {
      if (value === 'beginner') {
        this.resetOccupants()
      }
    },
  },
  created() {
    const level = this.$store.state.level
    const occupants = this.$store.getters['data/occupants'](level)
    const dwellings = this.$store.getters['data/dwellings'](level)
    const tabs = [
      {
        name: 'Space Needed',
        to: `/${level}/allocating/space-needed`,
        checked: false,
      },
      {
        name: 'Space Provided',
        to: `/${level}/allocating/space-provided`,
        checked: false,
      },
      {
        name: 'Space Comparison',
        to: `/${level}/allocating/space-comparison`,
        checked: false,
      },
      {
        name: 'Practice',
        to: `/${level}/allocating/allocating-practice`,
        checked: false,
      },
    ]
    this.$store.commit('allocating/setOccupants', occupants)
    this.$store.commit('allocating/setDwellings', dwellings)
    this.$store.commit('allocating/setTabs', tabs)
    this.setOccupants()
    if (this.competency === 'beginner') {
      this.resetOccupants()
    }
  },
  methods: {
    setOccupants() {
      const occupantLength = this.$store.getters['allocating/occupantsLength']
      const memberLength =
        this.$store.getters['allocating/occupantMemberLength']
      if (memberLength !== 0) {
        for (let i = 0; i < occupantLength; i++) {
          this.$store.commit('allocating/checkMemberProperty', {
            occupantIndex: i,
            memberIndex: 0,
            propertyKey: 'unitSpace',
          })
          for (let j = 0; j < memberLength; j++) {
            this.$store.commit('allocating/checkMemberProperty', {
              occupantIndex: i,
              memberIndex: j,
              propertyKey: 'count',
            })
          }
        }
      }
    },
    resetOccupants() {
      const competency = this.$store.getters.competency
      // const occupantLength = this.$store.getters['allocating/occupantsLength']
      const occupant = this.$store.state.allocating.occupants[2]
      if (competency === 'beginner') {
        this.$store.commit('allocating/checkMemberProperty', {
          occupantIndex: 2,
          memberIndex: 1,
          propertyKey: 'unitSpace',
        })
        Object.keys(occupant.properties).forEach((key) => {
          this.$store.commit('allocating/checkProperty', {
            occupantIndex: 2,
            propertyKey: key,
          })
        })
      }
    },
  },
}
</script>

<style scoped></style>
