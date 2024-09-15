export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
      {
        name: 'meta',
        title: 'Meta',
        type: 'string'
      },
      {
        name: 'banner',
        title: 'Banner Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'tagline',
        title: 'Tagline',
        type: 'string'
      }
    ]
  }
  