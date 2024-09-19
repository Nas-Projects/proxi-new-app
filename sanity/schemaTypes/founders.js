export default {
    name: "founder",
    title: "Founder",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "username",
        title: "Username",
        type: "string",
        validation: Rule => Rule.required().min(1).max(50),
      },
      {
        name: "bio",
        title: "Bio",
        type: "text",
        rows: 3,
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: Rule => Rule.required().email(),
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
      },
      {
        name: "image",
        title: "Profile Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "pastExperience",
        title: "Past Experience",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "socialMedia",
        title: "Social Media Links",
        type: "object",
        fields: [
          {
            name: "instagram",
            title: "Instagram",
            type: "url",
          },
          {
            name: "facebook",
            title: "Facebook",
            type: "url",
          },
          {
            name: "linkedin",
            title: "LinkedIn",
            type: "url",
          },
          {
            name: "twitter",
            title: "Twitter",
            type: "url",
          },
          {
            name: "website",
            title: "Website",
            type: "url",
          },
        ],
      },
    ],
  };
  