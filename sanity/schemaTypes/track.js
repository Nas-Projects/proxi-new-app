export default {
  name: "track",
  title: "Track",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the track",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      description: "Category of the track",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      description: "Price of the track",
      type: "string",
    },
    {
      name: "sessions",
      title: "Sessions",
      description: "Sessions of the track",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Images related to the track",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
  
      description: "details related to the track course",
    },
    {
      name: "exercises",
      title: "Exercises",
      type: "array",
      of: [{ type: "reference", to: { type: "exercise" } }],
      description: "Exercises included in this track",
    },
     {
       name:'modules',
       title: 'Modules & Process',
       type: 'text',

    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "Benefits of following this track",
    },
    {
      name: "execution",
      title: "Execution",
      type: "array",
      of: [{ type: "string" }],
      description: "Steps to execute the track",
    },
    {
      name: "stars",
      title: "Stars",
      type: "number",
      description: "Rating of the track",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "liked",
      title: "Liked",
      type: "boolean",
      description: "If the track is liked",
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
      description: "Number of likes",
    },
    {
      name: "equipment",
      title: "Equipment",
      type: "array",
      of: [{ type: "string" }],
      description: "Equipment needed for the track",
    },
    {
      name: "linkToBuild",
      title: "Link to Build",
      type: "url",
      description: "Link to the workout plan or build",
    },
    {
      name: "participants",
      title: "Participants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
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
          ],
        },
      ],
      description: "Participants in the track",
    },
    {
      name: "reviews",
      title: "Reviews",
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
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) => Rule.min(0).max(5),
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
      description: "Reviews for the track",
    },
  ],
};
