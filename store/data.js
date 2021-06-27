export const state = () => ({
  list: [
    { id: 1, name: '2DFolding', actions: ['folding'] },
    { id: 2, name: 'IslandFold01', actions: ['folding'] },
    {
      id: 3,
      name: 'IslandBuild01',
      actions: ['building', 'collecting', 'trading'],
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 6,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 3,
              measuringUnit: 'm',
            },
            area: {
              name: 'area',
              alias: 'floor space',
              value: 18,
              measuringUnit: 'm2',
            },
          },
        },
      ],
      buildingGoals: [
        {
          type: 'volume',
          full: true,
          building: {
            name: 'shipping container home',
            properties: {
              length: 18,
              width: 3,
              height: 6,
            },
          },
          measuringUnit: 'm3',
          value: 324,
        },
      ],
      buildings: [
        {
          name: 'shipping container home',
          count: 1,
          type: 'whole building',
          value: 324,
          goal: 'volume',
          measuringUnit: 'm3',
          children: [
            {
              name: 'shipping container',
              count: 6,
              type: 'module',
              value: 54,
              hasHint: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'IslandBuild02',
      actions: ['building', 'collecting', 'trading'],
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 8,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 5,
              measuringUnit: 'm',
            },
            area: {
              name: 'area',
              alias: 'floor space',
              value: 40,
              measuringUnit: 'm2',
            },
          },
        },
      ],
      buildingGoals: [
        {
          type: 'volume',
          full: true,
          building: {
            name: 'shipping container home',
            properties: {
              length: 15,
              width: 8,
              height: 6,
            },
          },
          measuringUnit: 'm3',
          value: 600,
        },
      ],
      buildings: [
        {
          name: 'shipping container home',
          count: 1,
          type: 'whole building',
          value: 600,
          goal: 'volume',
          measuringUnit: 'm3',
          children: [
            {
              name: 'shipping container',
              count: 5,
              type: 'building block',
              value: 120,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'DesertBuild01',
      actions: ['building', 'collecting', 'trading'],
      collectibles: [
        {
          name: 'clay block',
          type: 'building block',
          prompting: 'How many clay blocks are required for a 4X6 meter wall?',
          properties: {
            area: {
              name: 'area of a block',
              value: 4,
              measuringUnit: 'm2',
            },
            count: {
              name: 'no. of blocks',
              value: 6,
              measuringUnit: '',
            },
            target: {
              type: 'area',
              name: '4X6 meter wall',
              value: 24,
              measuringUnit: 'm2',
            },
          },
        },
      ],
      buildingGoals: [
        {
          type: 'surface area',
          full: true,
          building: {
            name: 'adobe house',
            properties: {
              length: 6,
              width: 4,
              height: 4,
            },
          },
          measuringUnit: 'm2',
          value: 104,
        },
      ],
      buildings: [
        {
          name: 'adobe house',
          count: 1,
          type: 'whole building',
          value: 104,
          goal: 'surface area',
          measuringUnit: 'm2',
          children: [
            {
              name: '6X4 wall',
              count: 2,
              type: 'module',
              value: 24,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 6,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
            {
              name: '4X4 wall',
              count: 2,
              type: 'module',
              value: 16,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 4,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
            {
              name: 'roof',
              count: 1,
              type: 'module',
              value: 24,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 6,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: 'DesertBuild02',
      actions: ['building', 'collecting', 'trading'],
      collectibles: [
        {
          name: 'clay block',
          type: 'building block',
          prompting: 'How many clay blocks are required for a 4X6 meter wall?',
          properties: {
            area: {
              name: 'area',
              value: 4,
              measuringUnit: 'm2',
            },
            count: {
              name: 'no. of blocks',
              value: 6,
              measuringUnit: '',
            },
            target: {
              type: 'area',
              name: '4X6 meter wall',
              value: 24,
              measuringUnit: 'm2',
            },
          },
        },
      ],
      buildingGoals: [
        {
          type: 'surface area',
          full: true,
          building: {
            name: 'adobe house',
            properties: {
              length: 6,
              width: 4,
              height: 4,
            },
          },
          measuringUnit: 'm2',
          value: 104,
        },
      ],
      buildings: [
        {
          name: 'adobe house',
          count: 1,
          type: 'whole building',
          value: 104,
          goal: 'surface area',
          measuringUnit: 'm2',
          children: [
            {
              name: '6X4 wall',
              count: 2,
              type: 'module',
              value: 24,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 6,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
            {
              name: '4X4 wall',
              count: 2,
              type: 'module',
              value: 16,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 4,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
            {
              name: 'roof',
              count: 1,
              type: 'module',
              value: 24,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 6,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'DesertBuild03',
      actions: ['building', 'collecting', 'trading'],
      collectibles: [
        {
          name: 'clay block',
          type: 'building block',
          prompting: 'How many clay blocks are required for a 4X6 meter wall?',
          properties: {
            area: {
              name: 'area',
              value: 4,
              measuringUnit: 'm2',
            },
            count: {
              name: 'no. of blocks',
              value: 6,
              measuringUnit: '',
            },
            target: {
              type: 'area',
              name: '4X6 meter wall',
              value: 24,
              measuringUnit: 'm2',
            },
          },
        },
      ],
      buildingGoals: [
        {
          type: 'surface area',
          full: true,
          building: {
            name: 'adobe house',
            properties: {
              length: 6,
              width: 4,
              height: 4,
            },
          },
          measuringUnit: 'm2',
          value: 104,
        },
      ],
      buildings: [
        {
          name: 'adobe house',
          count: 1,
          type: 'whole building',
          value: 104,
          goal: 'surface area',
          measuringUnit: 'm2',
          children: [
            {
              name: '6X4 wall',
              count: 2,
              type: 'module',
              value: 24,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 6,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
            {
              name: '4X4 wall',
              count: 2,
              type: 'module',
              value: 16,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 4,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
            {
              name: 'roof',
              count: 1,
              type: 'module',
              value: 24,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 6,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: 'DesertCopy01',
      actions: ['building', 'trading'],
      buildingGoals: [
        {
          type: 'area',
          full: true,
          building: {
            name: 'highlighted wall',
            properties: {
              length: 6,
              width: 4,
            },
          },
          measuringUnit: 'm2',
          value: 24,
        },
      ],
      buildings: [
        {
          name: 'highlighted wall',
          count: 1,
          type: 'whole building',
          value: 24,
          goal: 'area',
          measuringUnit: 'm2',
          children: [
            {
              name: '2X4 wall panel',
              count: 3,
              type: 'module',
              value: 8,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 2,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: 'DesertCopy02',
      actions: ['building', 'trading'],
      buildingGoals: [
        {
          type: 'area',
          full: true,
          building: {
            name: 'highlighted wall',
            properties: {
              length: 6,
              width: 4,
            },
          },
          measuringUnit: 'm2',
          value: 24,
        },
      ],
      buildings: [
        {
          name: 'highlighted wall',
          count: 1,
          type: 'whole building',
          value: 24,
          goal: 'area',
          measuringUnit: 'm2',
          children: [
            {
              name: '2X4 wall panel',
              count: 3,
              type: 'module',
              value: 8,
              hasHint: true,
              children: [
                {
                  name: 'clay block',
                  count: 2,
                  type: 'building block',
                  value: 4,
                },
              ],
            },
          ],
        },
      ],
    },
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
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 6,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 8,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 12,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
      ],
    },
    { id: 11, name: 'DesertPlacement01', actions: ['placing'] },
    { id: 12, name: 'FarmAngle01', actions: ['placing'] },
    {
      id: 13,
      name: 'FarmArea01',
      actions: ['collecting', 'placing', 'trading'],
      collectibles: [
        {
          name: 'short fence',
          prompting:
            'How many fence pieces will you need for a square with a perimeter of 12 meter?',
          type: 'fence',
          properties: {
            length: {
              name: 'length',
              value: 5,
              measuringUnit: 'm',
            },
            count: {
              name: 'no. of fences',
              value: 3,
              measuringUnit: '',
            },
            target: {
              type: 'perimeter',
              name: 'square',
              value: 12,
              measuringUnit: 'm',
            },
          },
        },
        {
          name: 'long fence',
          prompting:
            'How many fence pieces will you need for a square with a perimeter of 40 meter?',
          type: 'fence',
          properties: {
            length: {
              name: 'length',
              value: 10,
              measuringUnit: 'm',
            },
            count: {
              name: 'no. of fences',
              value: 4,
              measuringUnit: '',
            },
            target: {
              type: 'perimeter',
              name: 'square',
              value: 40,
              measuringUnit: 'm',
            },
          },
        },
      ],
    },
    {
      id: 14,
      name: 'FarmPerimeter01',
      actions: ['collecting', 'placing', 'trading'],
      collectibles: [
        {
          name: 'short fence',
          prompting:
            'How many fence pieces will you need for a square with a perimeter of 12 meter?',
          type: 'fence',
          properties: {
            length: {
              name: 'length',
              value: 5,
              measuringUnit: 'm',
            },
            count: {
              name: 'no. of fences',
              value: 3,
              measuringUnit: '',
            },
            target: {
              type: 'perimeter',
              name: 'square',
              value: 12,
              measuringUnit: 'm',
            },
          },
        },
        {
          name: 'long fence',
          prompting:
            'How many fence pieces will you need for a square with a perimeter of 40 meter?',
          type: 'fence',
          properties: {
            length: {
              name: 'length',
              value: 10,
              measuringUnit: 'm',
            },
            count: {
              name: 'no. of fences',
              value: 4,
              measuringUnit: '',
            },
            target: {
              type: 'perimeter',
              name: 'square',
              value: 40,
              measuringUnit: 'm',
            },
          },
        },
      ],
    },
    {
      id: 15,
      name: 'FarmTile01',
      actions: ['covering', 'trading'],
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
      collectibles: [
        {
          name: 'fish',
          prompting: 'How much space does this fish need?',
          type: 'individual',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 1,
              measuringUnit: 'm3',
            },
          },
        },
      ],
    },
    {
      id: 17,
      name: 'IslandBuild03',
      actions: ['building', 'collecting', 'trading'],
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 8,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 5,
              measuringUnit: 'm',
            },
            area: {
              name: 'area',
              alias: 'floor space',
              value: 40,
              measuringUnit: 'm2',
            },
          },
        },
      ],
      buildingGoals: [
        {
          type: 'volume',
          full: true,
          building: {
            name: 'shipping container home',
            properties: {
              length: 15,
              width: 8,
              height: 6,
            },
          },
          measuringUnit: 'm3',
          value: 600,
        },
      ],
      buildings: [
        {
          name: 'shipping container home',
          count: 1,
          type: 'whole building',
          value: 600,
          goal: 'volume',
          measuringUnit: 'm3',
          children: [
            {
              name: 'shipping container',
              count: 5,
              type: 'building block',
              value: 120,
            },
          ],
        },
      ],
    },
    { id: 18, name: 'IslandBuildTraining01', actions: [] },
    {
      id: 19,
      name: 'IslandCollect01',
      actions: ['collecting'],
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 6,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 3,
              measuringUnit: 'm',
            },
            area: {
              name: 'area',
              alias: 'floor space',
              value: 18,
              measuringUnit: 'm2',
            },
          },
        },
      ],
    },
    {
      id: 20,
      name: 'IslandCollect02',
      actions: ['collecting'],
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 6,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 8,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 12,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
      ],
    },
    {
      id: 21,
      name: 'IslandCollect03',
      actions: ['collecting'],
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 8,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 5,
              measuringUnit: 'm',
            },
            area: {
              name: 'area',
              alias: 'floor space',
              value: 40,
              measuringUnit: 'm2',
            },
          },
        },
      ],
    },
    {
      id: 22,
      name: 'IslandCollect04',
      actions: ['collecting'],
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 14,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 16,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 20,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
      ],
    },
    {
      id: 23,
      name: 'IslandCollect05',
      actions: ['collecting'],
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 8,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 5,
              measuringUnit: 'm',
            },
            area: {
              name: 'area',
              alias: 'floor space',
              value: 40,
              measuringUnit: 'm2',
            },
          },
        },
      ],
    },
    {
      id: 24,
      name: 'IslandCollect06',
      actions: ['collecting'],
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 14,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 16,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 20,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
      ],
    },
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
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 6,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 8,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 12,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
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
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 9,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 3,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 12,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 3,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 15,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 3,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 18,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 3,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
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
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 14,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 16,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 20,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 6,
                  ratio: 3,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
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
      collectibles: [
        {
          name: '1/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 6,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '1/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 8,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/1 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 10,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 1,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
              },
            },
          ],
        },
        {
          name: '2/2 Family',
          type: 'group',
          prompting: 'What is the total size of this family in square meters?',
          properties: {
            unitSpace: {
              name: 'unit space',
              alias: 'total size',
              value: 12,
              measuringUnit: 'm2',
            },
          },
          members: [
            {
              name: 'adult',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 4,
                  ratio: 2,
                  measuringUnit: 'm2',
                },
              },
            },
            {
              name: 'child',
              type: 'individual',
              properties: {
                count: {
                  name: 'count',
                  value: 2,
                  measuringUnit: '',
                },
                unitSpace: {
                  name: 'unit space',
                  alias: 'size',
                  value: 2,
                  ratio: 1,
                  measuringUnit: 'm2',
                },
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
      collectibles: [
        {
          name: 'Computer Student',
          type: 'individual',
          prompting: 'How much space does a computer student need?',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 6,
              measuringUnit: 'm2',
            },
          },
        },
        {
          name: 'Writing Student',
          type: 'individual',
          prompting: 'How much space does a writing student need?',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 1,
              measuringUnit: 'm2',
            },
          },
        },
        {
          name: 'Math Student',
          type: 'individual',
          prompting: 'How much space does a math student need?',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 3,
              measuringUnit: 'm2',
            },
          },
        },
      ],
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
      id: 30,
      name: 'SchoolBuild01',
      actions: ['building', 'trading'],
      buildingGoals: [
        {
          type: 'length',
          full: true,
          building: {
            name: 'stadium seat',
            properties: {
              length: 24,
              width: 5,
              height: 2.5,
            },
          },
          measuringUnit: 'm',
          value: 24,
        },
      ],
      buildings: [
        {
          name: 'stadium seat',
          count: 1,
          type: 'whole building',
          value: 24,
          goal: 'length',
          measuringUnit: 'm',
          children: [
            {
              name: 'stadium seat section',
              count: 2,
              type: 'parent module',
              value: 12,
              hasHint: true,
              children: [
                {
                  name: 'row',
                  count: 5,
                  type: 'module',
                  value: 12,
                  hasHint: true,
                  children: [
                    {
                      name: 'stadium block',
                      count: 6,
                      type: 'building block',
                      value: 2,
                      hasHint: false,
                    },
                  ],
                },
                {
                  name: 'support',
                  count: 2,
                  type: 'module',
                  goalRelated: false,
                  value: 0,
                  hasHint: true,
                  children: [
                    {
                      name: 'stadium block',
                      count: 10,
                      type: 'building block',
                      goalRelated: false,
                      value: 0,
                      hasHint: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 31,
      name: 'SchoolBuild02',
      actions: ['building', 'trading'],
      buildings: [
        {
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying the total length to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'Total Length',
              modal: {
                show: false,
                answer: 48,
                has_unit: true,
                question:
                  'what should the total length of the stadium seat be?',
                image_src: 'img/building/schoolbuild02/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try measuring it, if you do not know.',
                measuring_unit: 'm',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
          ],
          validated: false,
        },
        {
          name: 'phase 2',
          steps: [
            {
              card: {
                text: 'stadium seat section - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'stadium seat section',
              modal: {
                show: false,
                answer: 4,
                has_unit: false,
                question:
                  'How many stadium seat sections would be needed to complete the stadium seat?',
                image_src: 'img/building/schoolbuild02/phase2_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try counting them, if you do not know.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'row - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'row',
              modal: {
                show: false,
                answer: 5,
                has_unit: false,
                question:
                  'How many rows would be needed to build a stadium seat section?',
                image_src: 'img/building/schoolbuild02/phase2_step2.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try counting them, if you do not know.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'support - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'support',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many supports would be needed to build a stadium seat section?',
                image_src: 'img/building/schoolbuild02/phase2_step3.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try counting them, if you do not know.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
          ],
          validated: false,
        },
        {
          name: 'phase 3',
          steps: [
            {
              card: {
                text: 'Estimating how many stadium blocks needed to build rows',
                title: 'phase 3: planning',
              },
              name: 'row',
              modal: {
                show: false,
                answer: 30,
                has_unit: false,
                question:
                  'How many stadium blocks do you need to build 5 rows?',
                hint_feedback:
                  'Think about the length covered by each row in a stadium seat section.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many stadium blocks needed to build supports',
                title: 'phase 3: planning',
              },
              name: 'support',
              modal: {
                show: false,
                answer: 20,
                has_unit: false,
                question:
                  'How many stadium blocks do you need to build 2 supports?',
                hint_feedback:
                  'Return to the game and try counting how many stadium blocks are included in the existing example of a support.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many stadium blocks needed to build a(n) stadium seat section',
                title: 'phase 3: planning',
              },
              name: 'stadium seat section',
              modal: {
                show: false,
                answer: 50,
                has_unit: false,
                question:
                  'How many stadium blocks do you need to build a(n) stadium seat section?',
                hint_feedback:
                  'The sum of the answers to the 2 previous questions.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many stadium blocks needed to build the stadium seat',
                title: 'phase 3: planning',
              },
              name: 'stadium seat',
              modal: {
                show: false,
                answer: 200,
                has_unit: false,
                question:
                  'How many stadium blocks do you need to build the stadium seat?',
                hint_feedback:
                  'Think about how many stadium seat sections are included in the stadium seat.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
          ],
          validated: false,
        },
      ],
    },
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
      collectibles: [
        {
          name: 'Computer Student',
          type: 'individual',
          prompting: 'How much space does a computer student need?',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 6,
              measuringUnit: 'm2',
            },
          },
        },
        {
          name: 'Writing Student',
          type: 'individual',
          prompting: 'How much space does a writing student need?',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 1,
              measuringUnit: 'm2',
            },
          },
        },
        {
          name: 'Math Student',
          type: 'individual',
          prompting: 'How much space does a math student need?',
          properties: {
            unitSpace: {
              name: 'unit space',
              value: 3,
              measuringUnit: 'm2',
            },
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
      collectibles: [
        {
          name: 'shipping container',
          type: 'prefab building',
          prompting: 'What is the floor space of this shipping container?',
          properties: {
            length: {
              name: 'length',
              value: 6,
              measuringUnit: 'm',
            },
            width: {
              name: 'width',
              value: 3,
              measuringUnit: 'm',
            },
            floorSpace: {
              name: 'area',
              alias: 'floor space',
              value: 18,
              measuringUnit: 'm2',
            },
          },
        },
      ],
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

const itemImage = (itemName) => {
  const lowercaseName = itemName.toLowerCase()
  const urls = {
    '1/1 family': '/images/occupants/family-1-1.png',
    '1/2 family': '/images/occupants/family-1-2.png',
    '2/1 family': '/images/occupants/family-2-1.png',
    '2/2 family': '/images/occupants/family-2-2.png',
    'math student': '/images/occupants/math-student-1.png',
    'computer student': '/images/occupants/computer-student-1.png',
    'writing student': '/images/occupants/writing-student-1.png',
    fish: '/images/occupants/fish-1.png',
    'shipping container': '/images/dwellings/shipping-container-1.png',
    'adobe house': '/images/dwellings/adobe-house-1.png',
    'water tank': '/images/dwellings/water-tank-1.png',
    'short fence': '/images/material/short-fence-1.png',
    'long fence': '/images/material/long-fence-1.png',
    'clay block': '/images/material/clay-block-1.png',
  }
  return lowercaseName in urls ? urls[lowercaseName] : undefined
}

const populateCollectibleProps = (props) => {
  return Object.fromEntries(
    Object.entries(props).map(([key, prop]) => [
      key,
      {
        checked: false,
        ...prop,
      },
    ])
  )
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

const buildingImage = (buildingName) => {
  const lowercaseName = buildingName.toLowerCase()
  const urls = {
    'shipping container home': '/images/building/shipping-container-home-1.png',
    'adobe house': '/images/building/adobe-house-1.png',
    'highlighted wall': '/images/building/highlighted-wall-1.png',
    'stadium seat': '/images/building/stadium-seats-1.png',
    area: '/images/goals/goal-area-2.png',
    surface: '/images/goals/goal-surface-1.png',
    volume: '/images/goals/goal-volume-1.png',
  }
  return lowercaseName in urls ? urls[lowercaseName] : undefined
}

const buildingIcon = (buildingName) => {
  const lowercaseName = buildingName.toLowerCase()
  const baseUrl = '/images/building/'
  const urls = {
    'shipping container home': baseUrl + 'shipping-container-home-1.svg',
    'shipping container': baseUrl + 'shipping-container-1.svg',
    'adobe house': baseUrl + 'adobe-house-icon.png',
    '6x4 wall': baseUrl + '6x4-wall-icon.png',
    '4x4 wall': baseUrl + '4x4-wall-icon.png',
    roof: baseUrl + 'roof-icon.png',
    'clay block': baseUrl + 'clay-block-icon.png',
    'highlighted wall': baseUrl + 'highlighted-wall-icon.png',
    '2x4 wall panel': baseUrl + '2x4-wall-icon.png',
    'stadium block': baseUrl + 'stadium-block-icon.png',
    'stadium seat': baseUrl + 'stadium-seats-icon.png',
    'stadium seat section': baseUrl + 'stadium-seat-section-icon.png',
    row: baseUrl + 'stadium-row-icon.png',
    support: baseUrl + 'stadium-support-icon.png',
  }
  return lowercaseName in urls ? urls[lowercaseName] : undefined
}

let buildingCounter = 0

const populateBuildingData = (module, goal) => {
  buildingCounter += 1
  const measuringUnit = {
    length: 'm',
    area: 'm2',
    'surface area': 'm2',
    volume: 'm3',
  }
  return {
    id: buildingCounter,
    name: module.name,
    type: module.type,
    icon: buildingIcon(module.name),
    value: module.value,
    measuringUnit: measuringUnit[goal],
    checked: module.value <= 0,
    completed: false,
    count: module.count,
    hasHint: module.hasHint,
    ...('children' in module && {
      children: module.children.map((item) => populateBuildingData(item, goal)),
    }),
  }
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
      image: itemImage(occupant.name),
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
      image: itemImage(dwelling.name),
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
  collectibles: (state) => (levelName) => {
    const levelData = state.list.find(
      (x) => x.name.toLowerCase() === levelName.toLowerCase()
    )
    const collectibles =
      'collectibles' in levelData ? levelData.collectibles : undefined

    if (collectibles) {
      return collectibles.map((item) => ({
        name: item.name,
        type: item.type,
        prompting: item.prompting,
        image: itemImage(item.name),
        checked: false,
        properties: populateCollectibleProps(item.properties),
        ...(item.type === 'group' && {
          members: item.members.map((member) => ({
            name: member.name,
            type: member.type,
            checked: false,
            properties: populateCollectibleProps(member.properties),
          })),
        }),
      }))
    }
  },
  buildingGoals: (state) => (levelName) => {
    const levelData = state.list.find(
      (x) => x.name.toLowerCase() === levelName.toLowerCase()
    )
    const data =
      'buildingGoals' in levelData ? levelData.buildingGoals : undefined

    if (data) {
      return data.map((item) => ({
        building: item.building,
        name: item.building.name,
        image: buildingImage(item.building.name),
        checked: false,
        ...item,
      }))
    }
  },
  buildings: (state) => (levelName) => {
    const levelData = state.list.find(
      (x) => x.name.toLowerCase() === levelName.toLowerCase()
    )
    const data = 'buildings' in levelData ? levelData.buildings : undefined
    const goal = data[0].goal

    if (data) {
      return data.map((item) => populateBuildingData(item, goal))
    }
  },
}

export const mutations = {}
