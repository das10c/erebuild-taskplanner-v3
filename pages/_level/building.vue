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
  name: 'Building',
  data() {
    return {
      currentTab: 0,
      tabColor: 'light-green lighten-4',
      systemBar: {
        color: 'light-green',
        icon: 'mdi-office-building',
        title: 'Building',
      },
    }
  },
  computed: {
    tabs() {
      return this.$store.state.building.tabs
    },
  },
  created() {
    const level = this.$store.state.level
    const goals = this.$store.getters['data/buildingGoals'](level)
    const buildings = this.$store.getters['data/buildings'](level)
    const tabs = [
      {
        name: 'Goal Identification',
        to: `/${level}/building/goal-identification`,
        checked: false,
      },
      {
        name: 'Decomposition',
        to: `/${level}/building/decomposition`,
        checked: false,
      },
      {
        name: 'Planning',
        to: `/${level}/building/planning`,
        checked: false,
      },
    ]
    this.$store.commit('building/setGoals', goals)
    this.$store.commit('building/setBuildings', buildings)
    this.$store.commit('building/setTabs', tabs)
  },
}
</script>

<style scoped></style>
