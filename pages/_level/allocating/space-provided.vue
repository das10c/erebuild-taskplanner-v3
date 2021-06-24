<template>
  <v-row class="py-1" justify="center" dense>
    <v-col v-for="(dwelling, dIdx) in dwellings" :key="dIdx" cols="4">
      <app-cards
        v-bind="{
          extended: true,
          color: colors[dIdx].str,
          hexColor: colors[dIdx].hex,
          ...dwelling,
        }"
      >
        <template #front>
          <template v-for="(mVal, mKey, mIdx) in dwelling.mathValues">
            <template v-if="mVal.required">
              <div :key="'div-' + mIdx">
                <question-prompt
                  v-bind="feedMathValueData(dIdx, mVal)"
                  @proceeded="checkMathValues(dIdx, mKey)"
                >
                  <template #activator="slotProps">
                    <app-card-item
                      v-bind="{ extended: false, on: slotProps.on, ...mVal }"
                    >
                    </app-card-item>
                  </template>
                </question-prompt>
              </div>
              <v-divider :key="'divider-' + mIdx"></v-divider>
            </template>
          </template>
        </template>
        <template #back>
          <template v-for="(pVal, pKey, pIdx) in dwelling.properties">
            <template v-if="pVal.required">
              <div :key="'div-' + pIdx">
                <question-prompt
                  v-bind="feedPropertyData(dIdx, pVal, pKey)"
                  @proceeded="checkProperty(dIdx, pKey)"
                >
                  <template #activator="slotProps">
                    <app-card-item
                      v-bind="{ extended: false, on: slotProps.on, ...pVal }"
                    >
                    </app-card-item>
                  </template>
                </question-prompt>
              </div>
            </template>
          </template>
        </template>
      </app-cards>
    </v-col>
  </v-row>
</template>

<script>
import pluralize from 'pluralize'
import AppCards from '~/components/AppCards'
import AppCardItem from '~/components/AppCardItem'
import QuestionPrompt from '~/components/QuestionPrompt'
export default {
  name: 'SpaceProvided',
  components: { AppCards, AppCardItem, QuestionPrompt },
  data() {
    return {
      checked: false,
    }
  },
  async fetch() {},
  computed: {
    colors() {
      return this.$store.state.allocating.colors
    },
    dwellings() {
      return this.$store.getters['allocating/getDwellings']
    },
  },
  watch: {
    '$route.params.level': '$fetch',
  },
  created() {},
  methods: {
    feedMathValueData(dwellingIndex, mathValue) {
      const dwelling = this.dwellings[dwellingIndex]
      const value = mathValue

      return {
        title: `The ${value.name} of ${dwelling.name}`,
        question: `What is the ${value.name} of this ${dwelling.name}?`,
        hintFeedback: `Please check the information on the ${value.name} of the ${dwelling.name} using the tooltip in the game.`,
        inputType: 'number',
        hasUnit: !!value.measuringUnit,
        measuringUnit: value.measuringUnit,
        answer: value.value,
      }
    },
    feedPropertyData(dwellingIndex, propertyValue) {
      const dwelling = this.dwellings[dwellingIndex]
      const property = propertyValue
      const common = {
        inputType: 'number',
        hasUnit: !!property.measuringUnit,
        measuringUnit: property.measuringUnit,
        answer: property.value,
      }

      if (property.name === 'unit space') {
        return {
          title: `Floor Space Provided by One ${dwelling.name}`,
          question: `How much floor space does one ${dwelling.name} provide?`,
          hintFeedback: `Please check out the length and width of the ${dwelling.name} and multiply the two.`,
          ...common,
        }
      } else if (property.name === 'count') {
        return {
          title: `The Number of ${pluralize(dwelling.name)} Placed`,
          question: `How many ${pluralize(
            dwelling.name
          )} are placed in the game?`,
          hintFeedback: `Return to the game and try counting how many ${pluralize(
            dwelling.name
          )} are placed there.`,
          ...common,
        }
      } else if (property.name === 'total space') {
        return {
          title: `Floor Space Provided by All ${pluralize(dwelling.name)}`,
          question: `How much floor space is provided in total by the ${pluralize(
            dwelling.name
          )}?`,
          hintFeedback: `(Total Space) = (Unit Space) X (Quantity)`,
          ...common,
        }
      } else {
        return {
          title: '',
          question: '',
          hintFeedback: '',
          ...common,
        }
      }
    },
    checkMathValues(dwellingIndex, valueKey) {
      this.$store.commit('allocating/checkMathValues', {
        dwellingIndex,
        valueKey,
      })
      this.$store.commit('setInteractions', {
        type: 'dwelling.mathValue',
        data: this.dwellings[dwellingIndex].mathValues[valueKey],
        status: 'completed',
        timestamp: Date.now(),
      })
    },
    checkProperty(dwellingIndex, propertyKey) {
      this.$store.commit('allocating/checkDwellingProperty', {
        dwellingIndex,
        propertyKey,
      })
      this.$store.commit('setInteractions', {
        type: 'dwelling.property',
        data: this.dwellings[dwellingIndex].properties[propertyKey],
        status: 'completed',
        timestamp: Date.now(),
      })
    },
  },
}
</script>

<style scoped></style>
