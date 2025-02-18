module.exports = {
    name: 'Dyanmic Block [Test]',

    description:
        'Demo of all new features in version 1.0.0-preview.6 for block developers.',

    category: 'Test',

    aliases: ['dynamic_block'],

    inputs: (data) => [
        {
            id: 'action',
            name: 'Action',
            description: 'Executes this block.',
            types: ['action']
        },
        {
            id: 'item1',
            name: 'Item 1',
            description: 'An input to test.',
            types: [
                'unspecified',
                'undefined',
                'null',
                'object',
                'boolean',
                'date',
                'number',
                'text',
                'list'
            ],
            required: (data?.options?.['menu1'] ?? 'option1') === 'option1'
        },
        {
            id: 'item2',
            name: 'Item 2',
            description: 'An input to test.',
            types: ['text', 'object'],
            multiInput: true
        }
    ],

    options: (data) => [
        {
            id: 'menu1',
            name: 'Menu 1',
            description: 'An option to test.',
            type: 'SELECT',
            options: {
                option1: 'Option 1',
                option2: 'Option 2'
            }
        },
        data?.inputs?.['item2']?.length >= 2
            ? {
                  id: 'menu2',
                  name: 'Menu 2',
                  description: 'An option to test.',
                  type: 'SELECT',
                  options: [
                      { id: 'option1', name: 'Option 1' },
                      { type: 'SEPARATOR' },
                      {
                          type: 'GROUP',
                          name: 'Random Group',
                          options: [{ id: 'option2', name: 'Option 2' }]
                      },
                      { id: 'option3', name: 'Option 3' }
                  ]
              }
            : undefined,
        {
            id: 'menu3',
            name: 'Menu 3',
            description: 'An option to test.',
            type: 'MULTISELECT',
            options: {
                option1: 'Option 1',
                option2: 'Option 2'
            },
            allowUserOptions: true,
            duplicates: true
        }
    ],

    outputs(data) {
        const hasOption2 = data?.options?.['menu3']?.includes('option2')
        return [
            {
                id: 'action',
                name: 'Action',
                description:
                    'Executes the following blocks when this block finishes its task.',
                types: ['action']
            },
            {
                id: 'item1',
                name: hasOption2 ? 'Bad Item 1' : 'Good Item 1',
                description: 'An output to test.',
                types: [hasOption2 ? 'text' : 'number']
            },
            data?.options?.['menu3']?.includes('option1')
                ? {
                      id: 'item2',
                      name: 'Item 2',
                      description: 'An output to test.',
                      types: ['object']
                  }
                : undefined
        ]
    },

    code(cache) {
        this.RunNextBlock('action', cache)
    }
}
