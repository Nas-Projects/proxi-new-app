export default {
    name: "contacts",
    title: "Contact Information",
    type: "document",
    fields: [
      {
        name: "address",
        title: "Address",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "phoneNumber",
        title: "Phone Number",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: Rule => Rule.required().email(),
      },
      {
        name: "socials",
        title: "Socials",
        type: "array",
        of: [{ type: "reference", to: { type: "social" } }],
      },
    ],
  };
  