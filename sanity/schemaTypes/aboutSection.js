export default {
    name: 'aboutSection',
    title: 'About Section',
    type: 'object',
    fields: [
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'tagline',
        title: 'Tagline',
        type: 'string'
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      }
    ]
  }
  