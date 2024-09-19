export default {
    name: "termsAndConditions",
    title: "Terms and Conditions",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "terms",
        title: "Terms",
        type: "array",
        of: [{ type: "string" }],
        validation: Rule => Rule.required().min(1),
      },
    ],
  };
  