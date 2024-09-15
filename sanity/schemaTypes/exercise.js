export default {
  name: "exercise",
  title: "Exercise",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of exercise",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
      description: "Progress of exercise from 0 to 100%",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
      description: "Tags associated with the exercise",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      description: "Date of the exercise",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      description: "Author of the exercise",
    },
    {
      name: "caption",
      title: "Caption",
      type: "text",
      description: "Caption describing the exercise",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the exercise",
    },
    {
      name: "execution",
      title: "Execution",
      type: "array",
      of: [{ type: "string" }],
      description: "Steps to execute the exercise",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "Benefits the exercise",
    },
    {
      name: "stars",
      title: "Stars",
      type: "number",
      description: "Rating of the exercise",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "liked",
      title: "Liked",
      type: "boolean",
      description: "If the exercise is liked",
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
      description: "Number of likes",
    },
    {
      name: "shares",
      title: "Shares",
      type: "number",
      description: "Number of likes",
    },
    {
      name: "time",
      title: "Time",
      type: "number",
      description: "Execution time",
    },
    {
      name: "comments",
      title: "Comments",
      description: "Comments for the exercise",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "ID",
              type: "number",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "author",
              title: "Author",
              type: "string",
            },
            {
              name: "avatar",
              title: "Avatar",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "date",
              title: "Date",
              type: "string",
            },
            {
              name: "datetime",
              title: "Datetime",
              type: "datetime",
            },
            {
              name: "featured",
              title: "Featured",
              type: "boolean",
            },
          ],
        },
      ],
    },
    {
      name: "equipment",
      title: "Equipment",
      type: "array",
      of: [{ type: "string" }],
      description: "Equipment needed for the exercise",
    },
  ],
};

  