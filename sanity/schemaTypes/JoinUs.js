export default {
    name: 'joinUsPage',
    title: 'Join Us Page',
    type: 'document',
    fields: [
      {
        name: 'introParagraph',
        title: 'Intro Paragraph',
        type: 'text',
        description: 'Introductory text for the Join Us page.',
        validation: Rule => Rule.required(),
      },
      {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'sectionTitle',
                title: 'Section Title',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                name: 'sectionContent',
                title: 'Section Content',
                type: 'text',
                description: 'Main content of the section.',
                validation: Rule => Rule.required(),
              },
              {
                name: 'sectionImage',
                title: 'Section Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
                description: 'Optional image to illustrate the content of this section.',
              },
              {
                name: 'tiles',
                title: 'Tile Section',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'icon',
                        title: 'Icon',
                        type: 'image',
                        options: {
                          hotspot: true,
                        },
                      },
                      {
                        name: 'tileTitle',
                        title: 'Tile Title',
                        type: 'string',
                        validation: Rule => Rule.required(),
                      },
                      {
                        name: 'tileContent',
                        title: 'Tile Content',
                        type: 'text',
                        validation: Rule => Rule.required(),
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
        name: 'faqSection',
        title: 'Expandable FAQ Section',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'faqQuestion',
                title: 'FAQ Question',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                name: 'faqAnswer',
                title: 'FAQ Answer',
                type: 'text',
                validation: Rule => Rule.required(),
              },
            ],
          },
        ],
      },
    ],
  };
  