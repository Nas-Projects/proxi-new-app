export default {
    name: 'benefitsSection',
    title: 'Benefits Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Benefit Title', type: 'string' },
              { name: 'description', title: 'Benefit Description', type: 'text' }
            ]
          }
        ]
      }
    ]
  }
  