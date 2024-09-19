export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [
          {
            title: 'Social Link',
            type: 'object',
            fields: [
              {
                name: 'platform',
                title: 'Platform',
                type: 'string',
                options: {
                  list: [
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'TikTok', value: 'tiktok' },
                    { title: 'Twitter', value: 'twitter' },
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'LinkedIn', value: 'linkedin' },
                    // Add more platforms as needed
                  ],
                },
                validation: Rule => Rule.required(),
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
                validation: Rule => Rule.required().uri({ allowRelative: true }),
              },
            ],
          },
        ],
      },
    ],
  };
  