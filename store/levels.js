export const state = () => ({
  data: {
    '2dfolding': {
      actions: [],
    },
    islandfold01: {
      actions: [],
    },
    islandbuild01: {
      actions: [],
    },
    islandbuild02: {
      actions: [],
    },
    desertbuild01: {
      actions: [],
    },
    desertbuild02: {
      actions: [],
    },
    desertbuild03: {
      actions: [],
    },
    desertcopy01: {
      actions: [],
    },
    desertcopy02: {
      actions: [],
    },
    desertfill01: {
      actions: ['allocating', 'collecting'],
      occupants: [
        { id: 1, count: 4 },
        { id: 2, count: 2 },
        { id: 3, count: 2 },
        { id: 4, count: 3 },
      ],
      collectibles: [
        { type: 'occupant', id: 1 },
        { type: 'occupant', id: 2 },
        { type: 'occupant', id: 3 },
        { type: 'occupant', id: 4 },
      ],
    },
    desertplacement01: {
      actions: [],
    },
    farmangle01: {
      actions: [],
    },
    farmarea01: {
      actions: [],
    },
    farmperimeter01: {
      actions: [],
    },
    farmtile01: {
      actions: [],
    },
    farmvolume01: {
      actions: ['allocating', 'collecting'],
      occupants: [{ id: 10, count: 8 }],
      collectibles: [{ type: 'occupant', id: 10 }],
    },
    islandbuild03: {
      actions: [],
    },
    islandbuildtraining01: {
      actions: [],
    },
    islandcollect01: {
      actions: [],
    },
    islandcollect02: {
      actions: [],
    },
    islandcollect03: {
      actions: [],
    },
    islandcollect04: {
      actions: [],
    },
    islandcollect05: {
      actions: [],
    },
    islandcollect06: {
      actions: [],
    },
    islandfill01: {
      actions: ['allocating', 'collecting'],
      occupants: [
        { id: 1, count: 2 },
        { id: 2, count: 2 },
        { id: 3, count: 5 },
        { id: 4, count: 1 },
      ],
      collectibles: [
        { type: 'occupant', id: 1 },
        { type: 'occupant', id: 2 },
        { type: 'occupant', id: 3 },
        { type: 'occupant', id: 4 },
      ],
    },
    islandfill02: {
      actions: ['allocating', 'collecting'],
      occupants: [
        { id: 11, count: 3 },
        { id: 12, count: 3 },
        { id: 13, count: 3 },
        { id: 14, count: 3 },
      ],
      collectibles: [
        { type: 'occupant', id: 11 },
        { type: 'occupant', id: 12 },
        { type: 'occupant', id: 13 },
        { type: 'occupant', id: 14 },
      ],
    },
    islandfill03: {
      actions: ['allocating', 'collecting'],
      occupants: [
        { id: 21, count: 3 },
        { id: 22, count: 3 },
        { id: 23, count: 3 },
        { id: 24, count: 3 },
      ],
      collectibles: [
        { type: 'occupant', id: 21 },
        { type: 'occupant', id: 22 },
        { type: 'occupant', id: 23 },
        { type: 'occupant', id: 24 },
      ],
    },
    islandfilltraining01: {
      actions: ['allocating', 'collecting'],
      occupants: [{ id: 1, count: 5 }],
      collectibles: [{ type: 'occupant', id: 1 }],
    },
    schoolassignment01: {
      actions: ['allocating', 'collecting'],
      occupants: [
        { id: 7, count: 5 },
        { id: 8, count: 8 },
        { id: 9, count: 18 },
      ],
      collectibles: [
        { type: 'occupant', id: 7 },
        { type: 'occupant', id: 8 },
        { type: 'occupant', id: 9 },
      ],
    },
    schoolbuild01: {
      actions: [],
    },
    schoolbuild02: {
      actions: [],
    },
    schoolitems01: {
      actions: [],
    },
    schoolpaint01: {
      actions: [],
    },
    schoolpaint02: {
      actions: [],
    },
    schoolplacement01: {
      actions: ['allocating'],
      occupants: [
        { id: 7, count: 5 },
        { id: 8, count: 8 },
        { id: 9, count: 18 },
      ],
    },
    schoolplacement02: {
      actions: [],
    },
    trainingmove01: {
      actions: [],
    },
    trainingmove02: {
      actions: [],
    },
    trainingmove03: {
      actions: [],
    },
    trainingmove04: {
      actions: [],
    },
    trainingmove05: {
      actions: [],
    },
    '2dfolding02': {
      actions: [],
    },
    '2dfolding03': {
      actions: [],
    },
    '2dfolding04': {
      actions: [],
    },
    islandfold02: {
      actions: [],
    },
    islandfold03: {
      actions: [],
    },
    islandfold04: {
      actions: [],
    },
    schoolpaint03: {
      actions: [],
    },
    schoolpaint04: {
      actions: [],
    },
  },
})

export const getters = {
  getActions: (state) => (levelName) => {
    const levelData = state.data[levelName.toLowerCase()]
    return levelData.actions
  },
  getOccupants: (state) => (levelName) => {
    const levelData = state.data[levelName.toLowerCase()]
    return levelData.occupants
  },
}
