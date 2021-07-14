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
  name: 'Collecting',
  data() {
    return {
      currentTab: 0,
      tabColor: 'teal lighten-4',
      systemBar: {
        color: 'teal',
        icon: 'mdi-dolly',
        title: 'Collecting',
      },
    }
  },
  computed: {
    tabs() {
      return this.$store.state.collecting.tabs
    },
    competency() {
      return this.$store.getters.competency
    },
  },
  watch: {
    competency(value) {
      if (value === 'beginner') {
        this.resetCollectibles()
      }
    },
  },
  created() {
    const level = this.$store.state.level
    const collectibles = this.$store.getters['data/collectibles'](level)
    const tabs = [
      {
        name: 'Collecting Information',
        to: `/${level}/collecting/information-collected`,
        checked: false,
      },
    ]
    this.$store.commit('collecting/setCollectibles', collectibles)
    this.$store.commit('collecting/setTabs', tabs)
    this.setCollectibles()
    if (this.competency === 'beginner') {
      this.resetCollectibles()
    }
  },
  methods: {
    setCollectibles() {
      const itemLength = this.$store.getters['collecting/collectiblesLength']
      const memberLength =
        this.$store.getters['collecting/occupantMemberLength']
      if (memberLength !== 0) {
        for (let i = 0; i < itemLength; i++) {
          this.$store.commit('collecting/checkMemberProperty', {
            itemIndex: i,
            memberIndex: 0,
            propertyKey: 'unitSpace',
          })
          for (let j = 0; j < memberLength; j++) {
            this.$store.commit('collecting/checkMemberProperty', {
              itemIndex: i,
              memberIndex: j,
              propertyKey: 'count',
            })
          }
        }
      }
    },
    resetCollectibles() {
      const collectibles = this.$store.state.collecting.collectibles
      if (collectibles[0].type === 'group') {
        this.$store.commit('collecting/checkMemberProperty', {
          itemIndex: 2,
          memberIndex: 1,
          propertyKey: 'unitSpace',
        })
        this.$store.commit('collecting/checkProperty', {
          itemIndex: 2,
          propertyKey: 'unitSpace',
        })
      }
    },
  },
}
</script>

<style scoped></style>
