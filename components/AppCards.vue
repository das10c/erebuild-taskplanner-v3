<template>
  <v-card
    class="h-full d-flex flex-column"
    :color="checked ? color : ''"
    elevation="5"
  >
    <v-badge
      :color="checked ? 'primary' : ''"
      :icon="checked ? 'mdi-check' : ''"
      offset-x="30"
      offset-y="30"
      overlap
      bordered
    >
      <div class="pa-1 flex-grow-1">
        <div class="d-flex align-center flex-column">
          <v-avatar small size="120">
            <v-img :src="image" :alt="name" />
          </v-avatar>
          <div class="text-center mt-2">
            <template v-if="title.length > 0">
              <span class="font-weight-bold text-body-1 red--text">
                {{ title[0] | uppercase }}
                {{ title[1] | uppercase }}
              </span>
              <span class="font-weight-bold text-body-1">
                {{ ' of' | uppercase }}
              </span>
              <br />
              <span class="font-weight-bold text-body-1">
                {{ title[2] | uppercase }}
              </span>
            </template>
            <span v-else class="font-weight-bold text-body-1">
              {{ name | uppercase }}
            </span>
          </div>
        </div>
      </div>
    </v-badge>
    <v-divider></v-divider>
    <slot name="front"></slot>
    <template v-if="extended">
      <v-divider></v-divider>
      <div class="d-flex">
        <v-btn
          class="flex-grow-1"
          tile
          height="30"
          :color="color"
          @click="reveal = true"
        >
          <slot name="button">Learn More</slot>
        </v-btn>
      </div>
    </template>
    <v-expand-transition v-if="extended">
      <v-card
        v-if="reveal"
        :color="color"
        class="transition-fast-in-fast-out v-card--reveal d-flex flex-column"
        style="height: 100%"
      >
        <v-badge
          :color="checked ? 'primary' : color"
          :icon="checked ? 'mdi-check' : ''"
          offset-x="30"
          offset-y="30"
          overlap
        >
          <div class="pa-1 flex-grow-1">
            <div class="d-flex align-center flex-column">
              <v-avatar small size="72">
                <v-img :src="image" :alt="name" />
              </v-avatar>
              <div class="text-center mt-2">
                <span class="font-weight-bold text-body-1">
                  {{ name | uppercase }}
                </span>
              </div>
            </div>
          </div>
        </v-badge>
        <v-divider></v-divider>
        <slot name="back"></slot>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-btn
            class="flex-grow-1"
            dark
            tile
            height="30"
            :color="hexColor"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'AppCards',
  props: {
    image: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    hexColor: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: Array,
      default() {
        return []
      },
    },
    extended: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      reveal: false,
    }
  },
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
