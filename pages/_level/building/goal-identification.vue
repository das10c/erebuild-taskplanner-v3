<template>
  <v-row class="py-1" justify="center" dense>
    <v-col v-for="(goal, index) in goals" :key="index" cols="5">
      <app-cards
        v-bind="{
          extended: false,
          title: [goal.full ? 'full' : 'partial', goal.type, goal.name],
          color: colors[index].str,
          hexColor: colors[index].hex,
          ...goal,
        }"
      >
        <template #front>
          <question-prompt
            v-bind="feedGoalData(goal)"
            @proceeded="checkGoal(index)"
          >
            <template #activator="slotProps">
              <app-card-item
                v-bind="{
                  extended: false,
                  on: slotProps.on,
                  name: `${goal.full ? 'full' : 'partial'} ${goal.type}`,
                  measuringUnit: goal.measuringUnit,
                  checked: goal.checked,
                  value: goal.value,
                }"
              ></app-card-item>
            </template>
          </question-prompt>
        </template>
      </app-cards>
    </v-col>
  </v-row>
</template>

<script>
import AppCards from '~/components/AppCards'
import AppCardItem from '~/components/AppCardItem'
import QuestionPrompt from '~/components/QuestionPrompt'
export default {
  name: 'GoalIdentification',
  components: { QuestionPrompt, AppCards, AppCardItem },
  computed: {
    colors() {
      return this.$store.state.building.colors
    },
    goals() {
      return this.$store.getters['building/goals']
    },
    level() {
      return this.$store.getters.level
    },
  },
  methods: {
    targetInfo(goalType) {
      if (goalType === 'volume') {
        return 'length, width, and height'
      } else if (goalType === 'length') {
        return 'length, width, and height'
      } else if (goalType === 'area') {
        return 'length, width, and height'
      } else if (goalType === 'surface') {
        return 'length, width, and height'
      }
    },
    feedGoalData(goal) {
      return {
        title: `Identifying ${goal.full ? 'full' : 'partial'} ${
          goal.type
        } to be filled`,
        question: `What should the ${goal.full ? 'full' : 'partial'} ${
          goal.type
        } of the ${goal.building.name} be?`,
        hintFeedback: `Return to the game and try identifying its ${this.targetInfo(
          goal.type
        )}, based on the information given.`,
        inputType: 'number',
        hasUnit: !!goal.measuringUnit,
        measuringUnit: goal.measuringUnit,
        answer: goal.value,
        hasHint: true,
        hintImage: `/images/goals/${this.level}-goal-${
          goal.full ? '1' : '2'
        }.png`,
      }
    },
    checkGoal(goalIndex) {
      this.$store.commit('building/checkGoal', goalIndex)
    },
  },
}
</script>

<style scoped></style>
