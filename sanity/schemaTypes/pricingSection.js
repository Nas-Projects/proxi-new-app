
  // schemas/pricingSection.js
export default {
    name: 'pricingSection',
    title: 'Pricing Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      
      {
        name: 'plans',
        title: 'Plans',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'plan' }]
          }
        ]
      }
    ]
  }
  