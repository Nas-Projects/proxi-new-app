export default {
    name: "blockchain",
    title: "Blockchain",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "brandStatement",
        title: "Brand Statement",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [
          {
            type: "text", // Use 'text' for paragraphs
            options: {
              list: [] // Optional: Customize the list of text styles
            },
          }
        ],
      },
    ],
  };
  