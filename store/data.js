export const state = () => ({
  list: [
    { id: 1, name: '2DFolding', actions: ['folding'] },
    { id: 2, name: 'IslandFold01', actions: ['folding'] },
    {
      id: 3,
      name: 'IslandBuild01',
      actions: ['building', 'collecting', 'trading'],
    },
    {
      id: 4,
      name: 'IslandBuild02',
      actions: ['building', 'collecting', 'trading'],
    },
    {
      id: 5,
      name: 'DesertBuild01',
      actions: ['building', 'collecting', 'trading'],
    },
    {
      id: 6,
      name: 'DesertBuild02',
      actions: ['building', 'collecting', 'trading'],
    },
    {
      id: 7,
      name: 'DesertBuild03',
      actions: ['building', 'collecting', 'trading'],
    },
    { id: 8, name: 'DesertCopy01', actions: ['building', 'trading'] },
    { id: 9, name: 'DesertCopy02', actions: ['building', 'trading'] },
    {
      id: 10,
      name: 'DesertFill01',
      actions: ['allocating', 'collecting'],
      occupants: [
        {
          name: '1/1 Family',
          type: 'group',
          properties: {
            count: 4,
            unitSpace: 6,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          properties: {
            count: 2,
            unitSpace: 8,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          properties: {
            count: 2,
            unitSpace: 10,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 12,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
      ],
      dwellings: [
        {
          name: 'adobe house',
          type: 'prefab building',
          properties: {
            count: 4,
            unitSpace: 24,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 6,
            width: 4,
            height: 5,
          },
        },
      ],
    },
    { id: 11, name: 'DesertPlacement01', actions: ['placing'] },
    { id: 12, name: 'FarmAngle01', actions: ['placing'] },
    {
      id: 13,
      name: 'FarmArea01',
      actions: ['collecting', 'placing', 'trading'],
    },
    {
      id: 14,
      name: 'FarmPerimeter01',
      actions: ['collecting', 'placing', 'trading'],
    },
    {
      id: 15,
      name: 'FarmTile01',
      actions: ['collecting', 'covering', 'trading'],
    },
    {
      id: 16,
      name: 'FarmVolume01',
      actions: ['allocating'],
      occupants: [
        {
          name: 'Fish',
          type: 'individual',
          properties: {
            count: 8,
            unitSpace: 1,
            measuringUnit: 'm3',
          },
        },
      ],
      dwellings: [
        {
          name: 'water tank',
          type: 'prefab building',
          properties: {
            count: 1,
            unitSpace: 8,
            measuringUnit: 'm3',
            acceptableRate: 0.5,
          },
          matheValues: {
            length: 2,
            width: 2,
            height: 2,
          },
        },
      ],
    },
    {
      id: 17,
      name: 'IslandBuild03',
      actions: ['building', 'collecting', 'trading'],
    },
    { id: 18, name: 'IslandBuildTraining01', actions: [] },
    { id: 19, name: 'IslandCollect01', actions: ['collecting'] },
    { id: 20, name: 'IslandCollect02', actions: ['collecting'] },
    { id: 21, name: 'IslandCollect03', actions: ['collecting'] },
    { id: 22, name: 'IslandCollect04', actions: ['collecting'] },
    { id: 23, name: 'IslandCollect05', actions: ['collecting'] },
    { id: 24, name: 'IslandCollect06', actions: ['collecting'] },
    {
      id: 25,
      name: 'IslandFill01',
      actions: ['allocating', 'collecting'],
      occupants: [
        {
          name: '1/1 Family',
          type: 'group',
          properties: {
            count: 2,
            unitSpace: 6,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          properties: {
            count: 2,
            unitSpace: 8,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          properties: {
            count: 5,
            unitSpace: 10,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          properties: {
            count: 1,
            unitSpace: 12,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
      ],
      dwellings: [
        {
          name: 'shipping container',
          type: 'prefab building',
          properties: {
            count: 6,
            unitSpace: 18,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 6,
            width: 3,
            height: 3,
          },
        },
      ],
    },
    {
      id: 26,
      name: 'IslandFill02',
      actions: ['allocating', 'collecting'],
      occupants: [
        {
          name: '1/1 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 9,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 3,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 12,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 3,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 15,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 3,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 18,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 3,
                measuringUnit: 'm2',
              },
            },
          ],
        },
      ],
      dwellings: [
        {
          name: 'shipping container',
          type: 'prefab building',
          properties: {
            count: 5,
            unitSpace: 40,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 8,
            width: 5,
            height: 3,
          },
        },
      ],
    },
    {
      id: 27,
      name: 'IslandFill03',
      actions: ['allocating', 'collecting'],
      occupants: [
        {
          name: '1/1 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 10,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 14,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 16,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          properties: {
            count: 3,
            unitSpace: 20,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 6,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 2,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
          ],
        },
      ],
      dwellings: [
        {
          name: 'shipping container',
          type: 'prefab building',
          properties: {
            count: 5,
            unitSpace: 40,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 8,
            width: 5,
            height: 3,
          },
        },
      ],
    },
    {
      id: 28,
      name: 'IslandFillTraining01',
      actions: ['allocating', 'collecting'],
      occupants: [
        {
          name: '1/1 Family',
          type: 'group',
          properties: {
            count: 5,
            unitSpace: 6,
            measuringUnit: 'm2',
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 4,
                measuringUnit: 'm2',
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: 1,
                unitSpace: 2,
                measuringUnit: 'm2',
              },
            },
          ],
        },
      ],
      dwellings: [
        {
          name: 'shipping container',
          type: 'prefab building',
          properties: {
            count: 1,
            unitSpace: 18,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 6,
            width: 3,
            height: 3,
          },
        },
      ],
    },
    {
      id: 29,
      name: 'SchoolAssignment01',
      actions: ['allocating', 'collecting'],
      occupants: [
        {
          name: 'Computer Student',
          type: 'individual',
          properties: {
            count: 5,
            unitSpace: 6,
            measuringUnit: 'm2',
          },
        },
        {
          name: 'Writing Student',
          type: 'individual',
          properties: {
            count: 18,
            unitSpace: 1,
            measuringUnit: 'm2',
          },
        },
        {
          name: 'Math Student',
          type: 'individual',
          properties: {
            count: 8,
            unitSpace: 3,
            measuringUnit: 'm2',
          },
        },
      ],
      dwellings: [
        {
          name: 'shipping container',
          type: 'prefab building',
          properties: {
            count: 4,
            unitSpace: 18,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 6,
            width: 3,
            height: 3,
          },
        },
      ],
    },
    { id: 30, name: 'SchoolBuild01', actions: ['building', 'trading'] },
    { id: 31, name: 'SchoolBuild02', actions: ['building', 'trading'] },
    { id: 32, name: 'SchoolItems01', actions: ['placing'] },
    { id: 33, name: 'SchoolPaint01', actions: ['covering', 'trading'] },
    { id: 34, name: 'SchoolPaint02', actions: ['covering', 'trading'] },
    {
      id: 35,
      name: 'SchoolPlacement01',
      actions: ['allocating', 'collecting', 'placing'],
      occupants: [
        {
          name: 'Computer Student',
          type: 'individual',
          properties: {
            count: 5,
            unitSpace: 6,
            measuringUnit: 'm2',
          },
        },
        {
          name: 'Writing Student',
          type: 'individual',
          properties: {
            count: 18,
            unitSpace: 1,
            measuringUnit: 'm2',
          },
        },
        {
          name: 'Math Student',
          type: 'individual',
          properties: {
            count: 8,
            unitSpace: 3,
            measuringUnit: 'm2',
          },
        },
      ],
      dwellings: [
        {
          name: 'shipping container',
          type: 'prefab building',
          properties: {
            count: 4,
            unitSpace: 18,
            measuringUnit: 'm2',
            acceptableRate: 1,
          },
          matheValues: {
            length: 6,
            width: 3,
            height: 3,
          },
        },
      ],
    },
    {
      id: 36,
      name: 'SchoolPlacement02',
      actions: ['collecting', 'placing'],
    },
    { id: 37, name: 'TrainingMove01', actions: [] },
    { id: 38, name: 'TrainingMove02', actions: [] },
    { id: 39, name: 'TrainingMove03', actions: [] },
    { id: 40, name: 'TrainingMove04', actions: [] },
    { id: 41, name: 'TrainingMove05', actions: [] },
    { id: 42, name: '2DFolding02', actions: ['folding'] },
    { id: 43, name: 'IslandFold02', actions: ['folding'] },
    { id: 44, name: '2DFolding03', actions: ['folding'] },
    { id: 45, name: 'IslandFold03', actions: ['folding'] },
    { id: 46, name: '2DFolding04', actions: ['folding'] },
    { id: 47, name: 'IslandFold04', actions: ['folding'] },
    { id: 48, name: 'SchoolPaint03', actions: ['covering', 'trading'] },
    { id: 49, name: 'SchoolPaint04', actions: ['covering', 'trading'] },
  ],
})

const occupantImage = (occupantName) => {
  const lowercaseName = occupantName.toLowerCase()
  const urls = {
    '1/1 family': '/images/occupants/family-1-1.png',
    '1/2 family': '/images/occupants/family-1-2.png',
    '2/1 family': '/images/occupants/family-2-1.png',
    '2/2 family': '/images/occupants/family-2-2.png',
    'math student': '/images/occupants/math-student-1.png',
    'computer student': '/images/occupants/computer-student-1.png',
    'writing student': '/images/occupants/writing-student-1.png',
    fish: '/images/occupants/fish-1.png',
  }
  return lowercaseName in urls ? urls[lowercaseName] : undefined
}

const dwellingImage = (dwellingName) => {
  const lowercaseName = dwellingName.toLowerCase()
  const urls = {
    'shipping container': '/images/dwellings/shipping-container-1.png',
    'adobe house': '/images/dwellings/adobe-house-1.png',
    'water tank': '/images/dwellings/water-tank-1.png',
  }
  return lowercaseName in urls ? urls[lowercaseName] : undefined
}

const populateOccupantProps = (props) => {
  const newProps = {}
  Object.entries(props).forEach(([key, value]) => {
    if (key !== 'measuringUnit') {
      newProps[key] = {
        name: key.replace(/([A-Z])/g, ' $1').toLowerCase(),
        value,
        measuringUnit: key !== 'count' ? props.measuringUnit : undefined,
        checked: false,
      }
    }
  })
  return newProps
}

const populateMembers = (members) => {
  return members.map((member, index) => ({
    name: member.name,
    type: member.type,
    checked: false,
    properties: populateOccupantProps(member.properties),
  }))
}

const populateDwellingProps = (props) => {
  const newProps = {}
  Object.entries(props).forEach(([key, value]) => {
    if (key !== 'measuringUnit') {
      newProps[key] = {
        name: key.replace(/([A-Z])/g, ' $1').toLowerCase(),
        value,
        measuringUnit:
          key === 'count' || key === 'acceptableRate'
            ? undefined
            : props.measuringUnit,
        required: !(key === 'acceptableRate' && value === 1),
        checked: key === 'acceptableRate',
      }
    }
  })
  return newProps
}

const populateMatheValues = (matheValues, targetMeasuringUnit) => {
  const newValues = {}
  Object.entries(matheValues).forEach(([key, value]) => {
    newValues[key] = {
      name: key.replace(/([A-Z])/g, ' $1').toLowerCase(),
      value,
      measuringUnit: 'm',
      required: !(targetMeasuringUnit === 'm2' && key === 'height'),
      checked: false,
    }
  })
  return newValues
}

export const getters = {
  planners: (state) => (levelName) => {
    const levelData = state.list.find(
      (x) => x.name.toLowerCase() === levelName.toLowerCase()
    )
    return levelData.actions
  },
  occupants: (state) => (levelName) => {
    const levelData = state.list.find(
      (x) => x.name.toLowerCase() === levelName.toLowerCase()
    )
    const occupants = 'occupants' in levelData ? levelData.occupants : undefined
    return occupants.map((occupant, index) => ({
      name: occupant.name,
      type: occupant.type,
      image: occupantImage(occupant.name),
      checked: false,
      properties: {
        ...populateOccupantProps(occupant.properties),
        totalSpace: {
          name: 'total space',
          value: occupant.properties.unitSpace * occupant.properties.count,
          measuringUnit: occupant.properties.measuringUnit,
          checked: false,
        },
      },
      ...(occupant.type === 'group' && {
        members: populateMembers(occupant.members),
      }),
    }))
  },
  dwellings: (state) => (levelName) => {
    const levelData = state.list.find(
      (x) => x.name.toLowerCase() === levelName.toLowerCase()
    )
    const dwellings = 'dwellings' in levelData ? levelData.dwellings : undefined
    return dwellings.map((dwelling, index) => ({
      name: dwelling.name,
      type: dwelling.type,
      image: dwellingImage(dwelling.name),
      checked: false,
      properties: {
        ...populateDwellingProps(dwelling.properties),
        totalSpace: {
          name: 'total space',
          value:
            dwelling.properties.unitSpace *
            dwelling.properties.count *
            dwelling.properties.acceptableRate,
          measuringUnit: dwelling.properties.measuringUnit,
          required: true,
          checked: false,
        },
      },
      mathValues: {
        ...populateMatheValues(
          dwelling.matheValues,
          dwelling.properties.measuringUnit
        ),
      },
    }))
  },
}

export const mutations = {}
