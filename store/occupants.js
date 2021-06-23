export const state = () => ({
  data: {
    1: {
      name: '1/1 family',
      type: 'group',
      members: [
        { id: 5, count: 1 },
        { id: 6, count: 1 },
      ],
    },
    2: {
      name: '1/2 family',
      type: 'group',
      members: [
        { id: 5, count: 1 },
        { id: 6, count: 2 },
      ],
    },
    3: {
      name: '2/1 family',
      type: 'group',
      members: [
        { id: 5, count: 2 },
        { id: 6, count: 1 },
      ],
    },
    4: {
      name: '2/2 family',
      type: 'group',
      members: [
        { id: 5, count: 2 },
        { id: 6, count: 2 },
      ],
    },
    5: {
      name: 'adult',
      type: 'member',
      unitSpace: 4,
      measuringUnit: 'm2',
    },
    6: {
      name: 'child',
      type: 'member',
      unitSpace: 2,
      measuringUnit: 'm2',
    },
    7: {
      name: 'computer student',
      type: 'individual',
      unitSpace: 6,
      measuringUnit: 'm2',
    },
    8: {
      name: 'math student',
      type: 'individual',
      unitSpace: 3,
      measuringUnit: 'm2',
    },
    9: {
      name: 'writing student',
      type: 'individual',
      unitSpace: 1,
      measuringUnit: 'm2',
    },
    10: {
      name: 'fish',
      type: 'individual',
      unitSpace: 1,
      measuringUnit: 'm3',
    },
    11: {
      name: '1/1 family',
      type: 'group',
      members: [
        { id: 15, count: 1 },
        { id: 16, count: 1 },
      ],
    },
    12: {
      name: '1/2 family',
      type: 'group',
      members: [
        { id: 15, count: 1 },
        { id: 16, count: 2 },
      ],
    },
    13: {
      name: '2/1 family',
      type: 'group',
      members: [
        { id: 15, count: 2 },
        { id: 16, count: 1 },
      ],
    },
    14: {
      name: '2/2 family',
      type: 'group',
      members: [
        { id: 15, count: 2 },
        { id: 16, count: 2 },
      ],
    },
    15: {
      name: 'adult',
      type: 'member',
      unitSpace: 6,
      measuringUnit: 'm2',
    },
    16: {
      name: 'child',
      type: 'member',
      unitSpace: 3,
      measuringUnit: 'm2',
    },
    21: {
      name: '1/1 family',
      type: 'group',
      members: [
        { id: 25, count: 1 },
        { id: 26, count: 1 },
      ],
    },
    22: {
      name: '1/2 family',
      type: 'group',
      members: [
        { id: 25, count: 1 },
        { id: 26, count: 2 },
      ],
    },
    23: {
      name: '2/1 family',
      type: 'group',
      members: [
        { id: 25, count: 2 },
        { id: 26, count: 1 },
      ],
    },
    24: {
      name: '2/2 family',
      type: 'group',
      members: [
        { id: 25, count: 2 },
        { id: 26, count: 2 },
      ],
    },
    25: {
      name: 'adult',
      type: 'member',
      unitSpace: 6,
      measuringUnit: 'm2',
    },
    26: {
      name: 'child',
      type: 'member',
      unitSpace: 4,
      measuringUnit: 'm2',
    },
  },
})

export const getters = {
  getOccupant: (state) => (occupantId) => {
    const occupant = state.data[occupantId]
    return occupant
  },
}
