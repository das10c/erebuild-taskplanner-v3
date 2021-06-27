<template>
  <v-row class="py-1" justify="center" dense>
    <v-col cols="8">
      <v-treeview
        rounded
        activatable
        hoverable
        open-all
        transition
        :items="buildings"
      >
        <template #prepend="{ item }">
          <img
            v-if="item.icon"
            :src="item.icon"
            :alt="item.icon"
            height="32"
            width="32"
            class="mr-1"
          />
        </template>
        <template #label="{ item }">
          <span class="font-weight-bold mr-2"
            >{{ item.name | capitalize(true) }} :</span
          >
          <v-chip :color="item.checked ? 'white' : 'yellow'" class="px-1" label>
            {{ item.checked ? item.value : '?' }}
          </v-chip>
          <span v-if="item.measuringUnit" class="denser-letters">
            {{ item.measuringUnit.slice(0, 1) }}
            <sup v-if="item.measuringUnit.length > 1">{{
              item.measuringUnit.slice(1, 2)
            }}</sup>
          </span>
          <template v-if="item.type !== 'whole building'">
            <template v-if="item.count">
              <v-icon class="mx-1">mdi-close</v-icon>
              <v-chip
                :color="item.completed ? 'white' : 'yellow'"
                class="px-1"
                label
              >
                {{ item.completed ? item.count : '?' }}
              </v-chip>
            </template>
          </template>
        </template>
        <template #append="{ item }">
          <template v-if="item.type !== 'whole building'">
            <question-prompt
              v-if="!item.completed"
              v-bind="feedPlanningData(item)"
              @proceeded="checkModule(item.id)"
            >
              <template #activator="slotProps">
                <v-btn fab dark small color="error" v-on="slotProps.on">
                  <v-icon dark> mdi-alert-circle-outline </v-icon>
                </v-btn>
              </template>
            </question-prompt>
            <v-btn v-else fab dark small color="primary">
              <v-icon dark>mdi-check</v-icon>
            </v-btn>
          </template>
        </template>
      </v-treeview>
    </v-col>
  </v-row>
</template>

<script>
import pluralize from 'pluralize'
import QuestionPrompt from '~/components/QuestionPrompt'
export default {
  name: 'Planning',
  components: { QuestionPrompt },
  data() {
    return {}
  },
  computed: {
    level() {
      return this.$store.getters.level
    },
    goals() {
      return this.$store.getters['building/goals']
    },
    buildings() {
      return this.$store.getters['building/buildings']
    },
  },
  methods: {
    module(moduleId) {
      let module
      const modules = this.buildings[0].children
      modules.forEach((item) => {
        if (item.id === moduleId) module = item
      })
      return module
    },
    feedPlanningData(item) {
      const goal = this.goals[0]
      const parent = item.type === 'module' ? goal : this.module(item.id - 1)
      return {
        title: `Estimating how many ${pluralize(
          item.name
        )} needed to build the ${goal.name}`,
        question: `how many ${pluralize(item.name)} do you need to build the ${
          parent.name
        }?`,
        inputType: 'number',
        hasUnit: false,
        measuringUnit: '',
        answer: item.count,
        hintFeedback: `Think about how many ${pluralize(
          item.name
        )} would be needed to fill the full ${goal.type} of the ${
          parent.name
        }.`,
        hasHint: item.hasHint,
        hintImage: item.hasHint
          ? `/images/building/${this.level}/module-${item.id}.png`
          : '',
      }
    },
    checkModule(moduleId) {
      this.$store.commit('building/checkPlanning', moduleId)
    },
  },
}
</script>

<style scoped></style>
