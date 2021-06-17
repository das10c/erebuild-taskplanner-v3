<template>
  <v-row class="py-1" justify="center" dense>
    <v-col v-for="(goal, index) in goals" :key="index" cols="4">
      <app-cards
        v-bind="{
          extended: false,
          color: colors[index].str,
          hexColor: colors[index].hex,
          ...goal,
        }"
      ></app-cards>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'GoalIdentification',
  computed: {
    colors() {
      return this.$store.state.building.colors
    },
    goals() {
      return this.$store.getters['building/goals']
    },
  },
}
</script>

<style scoped></style>
