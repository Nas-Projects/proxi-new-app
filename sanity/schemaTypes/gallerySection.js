export default {
    name: 'gallerySection',
    title: 'Gallery Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'instagramUrl',
        title: 'Instagram URL',
        type: 'url'
      },
      {
        name: 'gallery',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'image', title: 'Image', type: 'image' },
              { name: 'caption', title: 'Caption', type: 'string' },
              { name: 'url', title: 'Image URL', type: 'url' }
            ]
          }
        ]
      }
    ]
  }
  