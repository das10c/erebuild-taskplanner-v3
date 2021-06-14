<template>
  <v-row class="py-1" justify="center" dense>
    <v-col v-for="(item, idx) in collectibles" :key="idx" :cols="3">
      <app-cards
        v-bind="{
          color: colors[idx].str,
          hexColor: colors[idx].hex,
          extended: true,
          ...item,
        }"
      >
        <!--        What to present on AppCard Front -->
        <template #front>
          <v-card
            :color="colors[idx].hex"
            class="d-flex align-center"
            height="96"
            tile
            dark
          >
            <v-card-text class="font-weight-bold pa-1 text-center">
              "{{ item.prompting }}"
            </v-card-text>
          </v-card>
        </template>
        <!--        -->
        <!--        What to present on AppCard Back -->
        <!--        When the type of collectible items is family. -->
        <template v-if="item.type === 'group'" #back>
          <template v-for="(member, mIdx) in item.members">
            <div :key="'div-' + mIdx" class="d-flex">
              <question-prompt
                v-bind="feedMemberLevel(idx, mIdx, member.properties.unitSpace)"
                @proceeded="checkMemberProperty(idx, mIdx, 'unitSpace')"
              >
                <template #activator="slotProps">
                  <app-card-item
                    v-bind="{
                      extended: true,
                      on: slotProps.on,
                      operation: 'multiply',
                      ...slotProps.attrs,
                      ...member,
                    }"
                  ></app-card-item>
                </template>
              </question-prompt>
            </div>
          </template>
          <div class="d-flex">
            <question-prompt
              v-bind="feedOccupantLevel(idx, item.properties.unitSpace)"
              @proceeded="checkProperty(idx, 'unitSpace')"
            >
              <template #activator="slotProps">
                <app-card-item
                  v-bind="{
                    isMember: false,
                    on: slotProps.on,
                    ...item.properties.unitSpace,
                  }"
                >
                </app-card-item>
              </template>
            </question-prompt>
          </div>
        </template>
        <!---->
        <!--        When the type of collectible items is not family. -->
        <template v-else #back>
          <!--When the type of collectible items is 'prefabricated building' -->
          <!--Prefab Building: shipping container -->
          <!--Area (floor space) = Length * Width -->
          <template v-if="item.type === 'prefab building'">
            <template v-for="(pVal, pKey, pIdx) in item.properties">
              <div :key="'div-' + pIdx" class="d-flex">
                <question-prompt
                  v-bind="feedDwellingProperty(item, pVal)"
                  @proceeded="checkProperty(idx, pKey)"
                >
                  <template #activator="slotProps">
                    <app-card-item
                      v-bind="{
                        extended: false,
                        on: slotProps.on,
                        ...pVal,
                      }"
                    ></app-card-item>
                  </template>
                </question-prompt>
              </div>
            </template>
          </template>
          <!--        When the type of collectible items is individual occupant. -->
          <template v-else-if="item.type === 'individual'">
            <template v-for="(pVal, pKey, pIdx) in item.properties">
              <div :key="'div-' + pIdx" class="d-flex">
                <question-prompt
                  v-bind="feedOccupantLevel(idx, pVal)"
                  @proceeded="checkProperty(idx, pKey)"
                >
                  <template #activator="slotProps">
                    <app-card-item
                      v-bind="{
                        isMember: false,
                        on: slotProps.on,
                        ...pVal,
                      }"
                    ></app-card-item>
                  </template>
                </question-prompt>
              </div>
            </template>
          </template>
          <!--        When the type of collectible items is building block. -->
          <template v-else-if="item.type === 'building block'">
            <template v-for="(pVal, pKey, pIdx) in item.properties">
              <div :key="'div-' + pIdx" class="d-flex">
                <question-prompt
                  v-bind="feedBlockProperty(item, pVal, pKey)"
                  @proceeded="checkProperty(idx, pKey)"
                >
                  <template #activator="slotProps">
                    <app-card-item
                      v-bind="{
                        isMember: false,
                        on: slotProps.on,
                        ...pVal,
                      }"
                    ></app-card-item>
                  </template>
                </question-prompt>
              </div>
            </template>
          </template>
          <!--        When the type of collectible items is fence. -->
          <template v-else-if="item.type === 'fence'">
            <template v-for="(pVal, pKey, pIdx) in item.properties">
              <div :key="'div-' + pIdx" class="d-flex">
                <question-prompt
                  v-bind="feedFenceProperty(item, pVal, pKey)"
                  @proceeded="checkProperty(idx, pKey)"
                >
                  <template #activator="slotProps">
                    <app-card-item
                      v-bind="{
                        isMember: false,
                        on: slotProps.on,
                        ...pVal,
                      }"
                    ></app-card-item>
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
  name: 'InformationCollected',
  components: { AppCards, AppCardItem, QuestionPrompt },
  data() {
    return {
      // collectibles: [],
      checked: false,
    }
  },
  computed: {
    colors() {
      return this.$store.state.allocating.colors
    },
    collectibles() {
      return this.$store.getters['collecting/collectibles']
    },
  },
  methods: {
    checkMemberProperty(itemIndex, memberIndex, propertyKey) {
      this.$store.commit('collecting/checkMemberProperty', {
        itemIndex,
        memberIndex,
        propertyKey,
      })
    },
    checkProperty(itemIndex, propertyKey) {
      this.$store.commit('collecting/checkProperty', {
        itemIndex,
        propertyKey,
      })
    },
    // Feeding each collectible item's member data to QuestionPrompt component
    // param 1. itemIndex - collectible item's index number in array
    // param 2. memberIndex - member's index number in each item's member array
    // param 3. property - the property of a member that will be displayed
    feedMemberLevel(itemIndex, memberIndex, property) {
      // getting the collectible item
      const item = this.collectibles[itemIndex]
      // getting the member
      const member = item.members[memberIndex]
      // setting up the data object with properties that are used for all cases
      const common = {
        inputType: 'number',
        hasUnit: 'measuringUnit' in property,
        measuringUnit:
          'measuringUnit' in property ? property.measuringUnit : '',
        answer: property.value,
      }
      // familyA.totalSize = (memberA.unitSpace * memberA.count) + (memberB.unitSpace * memberB.count)
      // if statement below is for checking the type of property for MEMBER
      if (property.name === 'unit space') {
        return {
          title: `Floor Space Needed for One ${member.name}`,
          question: `How much floor space does one ${member.name} need?`,
          hintFeedback: `Please check out the ratio of spatial need between ${item.members[0].name} and ${item.members[1].name}.`,
          // A button will be created to see the hint (image, formula, etc)
          // hasHint: true,
          ...common,
        }
      } else if (property.name === 'count') {
        return {
          title: `The Number of ${pluralize(member.name)} in One ${item.name}`,
          question: `How many ${pluralize(member.name)} are in one ${
            item.name
          }?`,
          hintFeedback: `Please check the information on the number of ${pluralize(
            member.name
          )} in one ${item.name}.`,
          ...common,
        }
      } else return null
    },
    // This feeding method is for occupant-level (not member-level)
    feedOccupantLevel(itemIndex, property) {
      const item = this.collectibles[itemIndex]
      const common = {
        inputType: 'number',
        hasUnit: 'measuringUnit' in property,
        measuringUnit:
          'measuringUnit' in property ? property.measuringUnit : '',
        answer: property.value,
      }

      if (property.name === 'unit space') {
        const hintFeedback =
          item.type === 'group'
            ? `What is the sum of space needed for ${item.members[0].name} and ${item.members[1].name}?`
            : `Please check out the player inventory to see the required floor space for one ${item.name}.`
        return {
          title: `Floor Space Needed for One ${item.name}`,
          question: `How much floor space is needed to place one ${item.name}?`,
          hintFeedback,
          ...common,
        }
      }
    },
    feedDwellingProperty(item, property) {
      const common = {
        inputType: 'number',
        hasUnit: 'measuringUnit' in property,
        measuringUnit:
          'measuringUnit' in property ? property.measuringUnit : '',
        answer: property.value,
      }

      if (property.name === 'area') {
        return {
          title: `Floor Space Provided by One ${item.name}`,
          question: `How much floor space does one ${item.name} provide?`,
          hintFeedback: `Please check out the length and width of the ${item.name} and multiply the two.`,
          ...common,
        }
      } else {
        return {
          title: `The ${property.name} of ${item.name}`,
          question: `What is the ${property.name} of this ${item.name}?`,
          hintFeedback: `Please check the information on the ${property.name} of the ${item.name} using the tooltip in the game.`,
          ...common,
        }
      }
    },
    feedBlockProperty(item, property, propertyKey) {
      const common = {
        inputType: 'number',
        hasUnit: 'measuringUnit' in property,
        measuringUnit:
          'measuringUnit' in property ? property.measuringUnit : '',
        answer: property.value,
      }

      if (propertyKey === 'area') {
        return {
          title: `The area of ${item.name}`,
          question: `What is the area of ${item.name}?`,
          hintFeedback: `Please check out the length and width of the ${item.name} and multiply the two.`,
          ...common,
        }
      } else if (propertyKey === 'count') {
        return {
          title: `Total Number of ${pluralize(item.name)} Needed`,
          question: `How many ${pluralize(item.name)} are required for ${
            item.properties.target.name
          }?`,
          hintFeedback: `Area of ${item.properties.target.name} divide by Area of ${item.name}`,
          ...common,
        }
      } else if (propertyKey === 'target') {
        return {
          title: `The ${property.type} of ${property.name}`,
          question: `What is the ${property.type} of this ${property.name}?`,
          hintFeedback: `Please measure the length and width of ${property.name} to calculate the area.`,
          ...common,
        }
      }
    },
    feedFenceProperty(item, property, propertyKey) {
      const common = {
        inputType: 'number',
        hasUnit: 'measuringUnit' in property,
        measuringUnit:
          'measuringUnit' in property ? property.measuringUnit : '',
        answer: property.value,
      }

      if (propertyKey === 'length') {
        return {
          title: `The length of ${item.name}`,
          question: `What is the length of ${item.name}?`,
          hintFeedback: `Please check the information on the ${property.name} of the ${item.name} using the tooltip in the game.`,
          ...common,
        }
      } else if (propertyKey === 'count') {
        return {
          title: `Total Number of ${pluralize(item.name)} Needed`,
          question: `How many ${pluralize(item.name)} are required for ${
            item.properties.target.name
          } with a ${item.properties.target.type} of ${
            item.properties.target.value
          } meter?`,
          hintFeedback: `The ${item.properties.target.type} of ${item.properties.target.name} divide by the length of ${item.name}`,
          ...common,
        }
      } else if (propertyKey === 'target') {
        return {
          title: `The ${property.type} of ${property.name}`,
          question: `What is the ${property.type} of this ${property.name}?`,
          hintFeedback: `Please check the information on the ${property.type} of the ${property.name} using the tooltip in the game.`,
          ...common,
        }
      }
    },
  },
}
</script>

<style scoped></style>
