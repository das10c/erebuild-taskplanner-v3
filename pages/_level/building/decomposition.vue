<template>
  <v-row class="py-1" justify="center" dense>
    <v-col cols="6">
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
            {{ item.checked ? (item.value > 0 ? item.value : '') : '?' }}
          </v-chip>
          <span
            v-if="item.measuringUnit && item.value > 0"
            class="denser-letters"
          >
            {{ item.measuringUnit.slice(0, 1) }}
            <sup v-if="item.measuringUnit.length > 1">{{
              item.measuringUnit.slice(1, 2)
            }}</sup>
          </span>
        </template>
        <template #append="{ item }">
          <template v-if="item.type !== 'whole building'">
            <question-prompt
              v-if="!item.checked && item.value > 0"
              v-bind="feedModuleData(item)"
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
import QuestionPrompt from '~/components/QuestionPrompt'
export default {
  name: 'Decomposition',
  components: { QuestionPrompt },
  data() {
    return {
      // buildings: [
      //   {
      //     id: 1,
      //     name: 'shipping container home',
      //     icon: '/images/building/shipping-container-home-1.svg',
      //     value: 324,
      //     measuringUnit: 'm3',
      //     checked: true,
      //     children: [
      //       {
      //         id: 2,
      //         name: 'shipping container',
      //         icon: '/images/building/shipping-container-1.svg',
      //         value: 54,
      //         measuringUnit: 'm3',
      //         checked: false,
      //       },
      //     ],
      //   },
      // ],
    }
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
    feedModuleData(item) {
      const goal = this.goals[0]
      return {
        title: `identifying ${goal.type} of one ${item.name}`,
        question: `what is the ${goal.type} of one ${item.name}?`,
        inputType: 'number',
        hasUnit: !!item.measuringUnit,
        measuringUnit: item.measuringUnit,
        answer: item.value,
        hintFeedback: 'volume = (length) x (width) x (height)',
        hasHint: item.hasHint,
        hintImage: item.hasHint
          ? `/images/building/${this.level}/module-${item.id}.png`
          : '',
      }
    },
    checkModule(moduleId) {
      this.$store.commit('building/checkModule', moduleId)
    },
  },
}
</script>

<style scoped>
.denser-letters {
  font-size: 0.85em;
  text-transform: lowercase;
  letter-spacing: -0.1em;
}
</style>
