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
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying full volume to be filled',
                title: 'phase 1: identifying your goal',
              },
              name: 'full volume',
              modal: {
                show: false,
                answer: 324,
                has_unit: true,
                question:
                  'What should the full volume of the shipping container home be?',
                image_src: 'img/building/islandbuild01/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try identifying its length, width, and height, based on the information given.',
                measuring_unit: 'm3',
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
                text: 'identifying volume of one shipping container',
                title: 'phase 2: decomposition',
              },
              name: 'shipping container',
              modal: {
                show: false,
                answer: 54,
                has_unit: true,
                question: 'what is the volume of one shipping container?',
                image_src: '',
                image_added: false,
                hint_feedback: 'volume = (length) x (width) x (height)',
                measuring_unit: 'm3',
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
                text: 'Estimating how many shipping containers needed to build the shipping container home',
                title: 'phase 3: planning',
              },
              name: 'shipping container home',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question:
                  'How many shipping containers do you need to build the shipping container home?',
                hint_feedback:
                  'Think about how many shipping containers would be needed to fill the full volume of the shipping container home.',
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
          value: 720,
        },
      ],
      buildings: [
        {
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying full volume to be filled',
                title: 'phase 1: identifying your goal',
              },
              name: 'full volume',
              modal: {
                show: false,
                answer: 600,
                has_unit: true,
                question:
                  'What should the full volume of the shipping container home be?',
                image_src: 'img/building/islandbuild02/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try identifying its length, width, and height, based on the information given.',
                measuring_unit: 'm3',
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
                text: 'identifying volume of one shipping container',
                title: 'phase 2: decomposition',
              },
              name: 'shipping container',
              modal: {
                show: false,
                answer: 120,
                has_unit: true,
                question: 'what is the volume of one shipping container?',
                image_src: '',
                image_added: false,
                hint_feedback: 'volume = (length) x (width) x (height)',
                measuring_unit: 'm3',
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
                text: 'Estimating how many shipping containers needed to build the shipping container home',
                title: 'phase 3: planning',
              },
              name: 'shipping container home',
              modal: {
                show: false,
                answer: 5,
                has_unit: false,
                question:
                  'How many shipping containers do you need to build the shipping container home?',
                hint_feedback:
                  'Think about how many shipping containers would be needed to fill the full volume of the shipping container home.',
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
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying total surface area to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'total surface area',
              modal: {
                show: false,
                answer: 104,
                has_unit: true,
                question:
                  'What should the total surface area of the adobe house be?',
                image_src: 'img/building/desertbuild01/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try identifying its length, width, and height, based on the information given.',
                measuring_unit: 'm2',
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
                text: 'large walls - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'large wall',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many large walls would be needed to build the adobe house?',
                image_src: 'img/building/desertbuild01/phase2_step1.png',
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
                text: 'small wall - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'small wall',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many small walls would be needed to build the adobe house?',
                image_src: 'img/building/desertbuild01/phase2_step2.png',
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
                text: 'roof - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'roof',
              modal: {
                show: false,
                answer: 1,
                has_unit: false,
                question:
                  'How many roofs would be needed to build the adobe house?',
                image_src: 'img/building/desertbuild01/phase2_step3.png',
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
                text: 'Estimating how many clay blocks needed to build a large wall',
                title: 'phase 3: planning',
              },
              name: 'large wall',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build a large wall?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a large wall.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build a small wall',
                title: 'phase 3: planning',
              },
              name: 'small wall',
              modal: {
                show: false,
                answer: 4,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build a small wall?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a small wall.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build a roof',
                title: 'phase 3: planning',
              },
              name: 'roof',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question: 'How many clay blocks do you need to build a roof?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a roof.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build the adobe house',
                title: 'phase 3: planning',
              },
              name: 'adobe house',
              modal: {
                show: false,
                answer: 26,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build the adobe house?',
                hint_feedback:
                  'Think about how many large walls, small walls, and roofs are included in the adobe house.',
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
        [
          {
            name: 'phase 1',
            steps: [
              {
                card: {
                  text: 'step 1 - identifying total surface area to be covered',
                  title: 'phase 1: identifying your goal',
                },
                name: 'total surface area',
                modal: {
                  show: false,
                  answer: 104,
                  has_unit: true,
                  question:
                    'What should the total surface area of the adobe house be?',
                  image_src: 'img/building/desertbuild02/phase1_step1.png',
                  image_added: true,
                  hint_feedback:
                    'Return to the game and try identifying its length, width, and height, based on the information given.',
                  measuring_unit: 'm2',
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
                  text: 'large walls - identifying structure of the existing building',
                  title: 'phase 2: decomposition',
                },
                name: 'large wall',
                modal: {
                  show: false,
                  answer: 2,
                  has_unit: false,
                  question:
                    'How many large walls would be needed to build the adobe house?',
                  image_src: 'img/building/desertbuild02/phase2_step1.png',
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
                  text: 'small wall - identifying structure of the existing building',
                  title: 'phase 2: decomposition',
                },
                name: 'small wall',
                modal: {
                  show: false,
                  answer: 2,
                  has_unit: false,
                  question:
                    'How many small walls would be needed to build the adobe house?',
                  image_src: 'img/building/desertbuild02/phase2_step2.png',
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
                  text: 'roof - identifying structure of the existing building',
                  title: 'phase 2: decomposition',
                },
                name: 'roof',
                modal: {
                  show: false,
                  answer: 1,
                  has_unit: false,
                  question:
                    'How many roofs would be needed to build the adobe house?',
                  image_src: 'img/building/desertbuild02/phase2_step3.png',
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
                  text: 'Estimating how many clay blocks needed to build a large wall',
                  title: 'phase 3: planning',
                },
                name: 'large wall',
                modal: {
                  show: false,
                  answer: 6,
                  has_unit: false,
                  question:
                    'How many clay blocks do you need to build a large wall?',
                  hint_feedback:
                    'Try counting how many clay blocks are included in a large wall.',
                  measuring_unit: '',
                  valid_feedback:
                    'Great job! Please click on PROCEED button to move on to the next step.',
                  invalid_feedback: "That's not correct. Please try again.",
                },
                checked: false,
              },
              {
                card: {
                  text: 'Estimating how many clay blocks needed to build a small wall',
                  title: 'phase 3: planning',
                },
                name: 'small wall',
                modal: {
                  show: false,
                  answer: 4,
                  has_unit: false,
                  question:
                    'How many clay blocks do you need to build a small wall?',
                  hint_feedback:
                    'Try counting how many clay blocks are included in a small wall.',
                  measuring_unit: '',
                  valid_feedback:
                    'Great job! Please click on PROCEED button to move on to the next step.',
                  invalid_feedback: "That's not correct. Please try again.",
                },
                checked: false,
              },
              {
                card: {
                  text: 'Estimating how many clay blocks needed to build a roof',
                  title: 'phase 3: planning',
                },
                name: 'roof',
                modal: {
                  show: false,
                  answer: 6,
                  has_unit: false,
                  question: 'How many clay blocks do you need to build a roof?',
                  hint_feedback:
                    'Try counting how many clay blocks are included in a roof.',
                  measuring_unit: '',
                  valid_feedback:
                    'Great job! Please click on PROCEED button to move on to the next step.',
                  invalid_feedback: "That's not correct. Please try again.",
                },
                checked: false,
              },
              {
                card: {
                  text: 'Estimating how many clay blocks needed to build the adobe house',
                  title: 'phase 3: planning',
                },
                name: 'adobe house',
                modal: {
                  show: false,
                  answer: 26,
                  has_unit: false,
                  question:
                    'How many clay blocks do you need to build the adobe house?',
                  hint_feedback:
                    'Think about how many large walls, small walls, and roofs are included in the adobe house.',
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
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying total surface area to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'total surface area',
              modal: {
                show: false,
                answer: 104,
                has_unit: true,
                question:
                  'What should the total surface area of the adobe house be?',
                image_src: 'img/building/desertbuild03/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try identifying its length, width, and height, based on the information given.',
                measuring_unit: 'm2',
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
                text: 'large walls - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'large wall',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many large walls would be needed to build the adobe house?',
                image_src: 'img/building/desertbuild03/phase2_step1.png',
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
                text: 'small wall - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'small wall',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many small walls would be needed to build the adobe house?',
                image_src: 'img/building/desertbuild03/phase2_step2.png',
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
                text: 'roof - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'roof',
              modal: {
                show: false,
                answer: 1,
                has_unit: false,
                question:
                  'How many roofs would be needed to build the adobe house?',
                image_src: 'img/building/desertbuild03/phase2_step3.png',
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
                text: 'Estimating how many clay blocks needed to build a large wall',
                title: 'phase 3: planning',
              },
              name: 'large wall',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build a large wall?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a large wall.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build a small wall',
                title: 'phase 3: planning',
              },
              name: 'small wall',
              modal: {
                show: false,
                answer: 4,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build a small wall?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a small wall.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build a roof',
                title: 'phase 3: planning',
              },
              name: 'roof',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question: 'How many clay blocks do you need to build a roof?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a roof.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build the adobe house',
                title: 'phase 3: planning',
              },
              name: 'adobe house',
              modal: {
                show: false,
                answer: 26,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build the adobe house?',
                hint_feedback:
                  'Think about how many large walls, small walls, and roofs are included in the adobe house.',
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
    {
      id: 8,
      name: 'DesertCopy01',
      actions: ['building', 'trading'],
      buildingGoals: [
        {
          type: 'area',
          full: true,
          building: {
            name: 'adobe house',
            properties: {
              length: 8,
              width: 4,
            },
          },
          measuringUnit: 'm2',
          value: 32,
        },
        {
          type: 'area',
          full: false,
          building: {
            name: 'adobe house',
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
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying total area to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'total area',
              modal: {
                show: false,
                answer: 32,
                has_unit: true,
                question: 'What should the total area of the whole wall be?',
                image_src: 'img/building/desertcopy01/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try measuring its length and width, if you do not know.',
                measuring_unit: 'm2',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'step 2 - identifying the remaining area to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'Remaining Area',
              modal: {
                show: false,
                answer: 24,
                has_unit: true,
                question:
                  'What is the remaining area of Whole Wall to be covered?',
                image_src: 'img/building/desertcopy01/phase1_step2.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try measuring its length and width, if you do not know.',
                measuring_unit: 'm2',
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
                text: 'wall panels - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'wall panel',
              modal: {
                show: false,
                answer: 3,
                has_unit: false,
                question:
                  'How many wall panels would be needed to complete the remaining area of the whole wall?',
                image_src: 'img/building/desertcopy01/phase2_step1.png',
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
                text: 'Estimating how many clay blocks needed to build a wall panel',
                title: 'phase 3: planning',
              },
              name: 'wall panel',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build a wall panel?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a wall panel.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build the adobe house',
                title: 'phase 3: planning',
              },
              name: 'adobe house',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build the whole wall?',
                hint_feedback:
                  'Think about how many wall panels are included in the whole wall.',
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
    {
      id: 9,
      name: 'DesertCopy02',
      actions: ['building', 'trading'],
      buildingGoals: [
        {
          type: 'area',
          full: true,
          building: {
            name: 'adobe house',
            properties: {
              length: 8,
              width: 4,
            },
          },
          measuringUnit: 'm2',
          value: 32,
        },
        {
          type: 'area',
          full: false,
          building: {
            name: 'adobe house',
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
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying total area to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'total area',
              modal: {
                show: false,
                answer: 32,
                has_unit: true,
                question: 'What should the total area of the whole wall be?',
                image_src: 'img/building/desertcopy02/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try measuring its length and width, if you do not know.',
                measuring_unit: 'm2',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'step 2 - identifying the remaining area to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'Remaining Area',
              modal: {
                show: false,
                answer: 24,
                has_unit: true,
                question:
                  'What is the remaining area of Whole Wall to be covered?',
                image_src: 'img/building/desertcopy02/phase1_step2.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try measuring its length and width, if you do not know.',
                measuring_unit: 'm2',
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
                text: 'small wall panels - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'small wall panel',
              modal: {
                show: false,
                answer: 3,
                has_unit: false,
                question:
                  'How many small wall panels would be needed to complete the remaining area of the whole wall?',
                image_src: 'img/building/desertcopy02/phase2_step1.png',
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
                text: 'Estimating how many clay blocks needed to build a small wall panel',
                title: 'phase 3: planning',
              },
              name: 'small wall panel',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build a small wall panel?',
                hint_feedback:
                  'Try counting how many clay blocks are included in a small wall panel.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many clay blocks needed to build the adobe house',
                title: 'phase 3: planning',
              },
              name: 'adobe house',
              modal: {
                show: false,
                answer: 6,
                has_unit: false,
                question:
                  'How many clay blocks do you need to build the whole wall?',
                hint_feedback:
                  'Think about how many small wall panels are included in the whole wall.',
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
      buildings: [
        {
          name: 'phase 1',
          steps: [
            {
              card: {
                text: 'step 1 - identifying full volume to be filled',
                title: 'phase 1: identifying your goal',
              },
              name: 'full volume',
              modal: {
                show: false,
                answer: 600,
                has_unit: true,
                question:
                  'What should the full volume of the shipping container home be?',
                image_src: 'img/building/islandbuild03/phase1_step1.png',
                image_added: true,
                hint_feedback:
                  'Return to the game and try identifying its length, width, and height, based on the information given.',
                measuring_unit: 'm3',
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
                text: 'top floor - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'top floor',
              modal: {
                show: false,
                answer: 1,
                has_unit: false,
                question:
                  'How many top floors would be needed to build the shipping container home?',
                image_src: 'img/building/islandbuild03/phase2_step1.png',
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
                text: 'bottom floor - identifying structure of the existing building',
                title: 'phase 2: decomposition',
              },
              name: 'bottom floor',
              modal: {
                show: false,
                answer: 1,
                has_unit: false,
                question:
                  'How many bottom floors would be needed to build the shipping container home?',
                image_src: 'img/building/islandbuild03/phase2_step2.png',
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
                text: 'Estimating how many shipping containers needed to build the top floor',
                title: 'phase 3: planning',
              },
              name: 'top floor',
              modal: {
                show: false,
                answer: 3,
                has_unit: false,
                question:
                  'How many shipping containers do you need to build the top floor?',
                image_src: 'img/building/islandbuild03/phase2_step1.png',
                image_added: true,
                hint_feedback:
                  'Try counting how many shipping containers are included in the top floor.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many shipping containers needed to build the bottom floor',
                title: 'phase 3: planning',
              },
              name: 'bottom floor',
              modal: {
                show: false,
                answer: 2,
                has_unit: false,
                question:
                  'How many shipping containers do you need to build the bottom floor?',
                image_src: 'img/building/islandbuild03/phase2_step2.png',
                image_added: true,
                hint_feedback:
                  'Try counting how many shipping containers are included in the bottom floor.',
                measuring_unit: '',
                valid_feedback:
                  'Great job! Please click on PROCEED button to move on to the next step.',
                invalid_feedback: "That's not correct. Please try again.",
              },
              checked: false,
            },
            {
              card: {
                text: 'Estimating how many shipping containers needed to build the shipping container home',
                title: 'phase 3: planning',
              },
              name: 'shipping container home',
              modal: {
                show: false,
                answer: 5,
                has_unit: false,
                question:
                  'How many shipping containers do you need to build the shipping container home?',
                hint_feedback:
                  'The sum of the answers to the 2 previous questions.',
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
                image_src: 'img/building/schoolbuild01/phase1_step1.png',
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
            {
              card: {
                text: 'step 2 - identifying the remaining length to be covered',
                title: 'phase 1: identifying your goal',
              },
              name: 'Remaining Length',
              modal: {
                show: false,
                answer: 24,
                has_unit: true,
                question:
                  'What is the remaining length of Stadium Seat to be covered?',
                image_src: 'img/building/schoolbuild01/phase1_step2.png',
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
                answer: 2,
                has_unit: false,
                question:
                  'How many stadium seat sections would be needed to complete the remaining length of the stadium seat?',
                image_src: 'img/building/schoolbuild01/phase2_step1.png',
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
                image_src: 'img/building/schoolbuild01/phase2_step2.png',
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
                image_src: 'img/building/schoolbuild01/phase2_step3.png',
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
                answer: 100,
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

const buildingGoalImage = (goalType) => {
  const lowercaseName = goalType.toLowerCase()
  const urls = {
    length: '/images/goals/goal-length-1.png',
    area: '/images/goals/goal-area-2.png',
    surface: '/images/goals/goal-surface-1.png',
    volume: '/images/goals/goal-volume-1.png',
  }
  return lowercaseName in urls ? urls[lowercaseName] : undefined
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
        name: item.building.name,
        image: buildingGoalImage(item.type),
        checked: false,
        ...item,
      }))
    }
  },
}

export const mutations = {}
