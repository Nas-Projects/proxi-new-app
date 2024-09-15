// schemas/aboutPage.js
export default {
    name: 'aboutPage',
    type: 'document',
    title: 'About Page',
    fields: [
      {
        name: 'sections',
        type: 'array',
        title: 'Sections',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Section Title',
              },
              {
                name: 'description',
                type: 'text',
                title: 'Section Description',
              },
              {
                name: 'image',
                type: 'image',
                title: 'Section Image',
                options: {
                  hotspot: true, // Enables image cropping
                },
              },
            ],
          },
        ],
      },
    ],
  };
  