export default {
  name: "agent",
  title: "Agent",
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
      name: "userRole",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Agent", value: "Agent" },
          { title: "Broker", value: "Broker" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "realEstateLicense",
      title: "Real Estate License",
      type: "string",
      // Temporarily removing validation
      // validation: Rule => Rule.custom((value, context) => {
      //   const { userRole } = context.document || {};
      //   if (userRole === "Agent" || userRole === "Broker") {
      //     return value ? Rule.required() : Rule.error("Real Estate License is required for Agents and Brokers");
      //   }
      //   return Rule.optional();
      // }),
    },
    {
      name: "walletAddress",
      title: "Wallet Address",
      type: "string",
    },
    {
      name: "badges",
      title: "Badges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string", validation: Rule => Rule.required() },
            { name: "description", title: "Description", type: "string" },
            { name: "earnedAt", title: "Earned At", type: "datetime" },
          ],
        },
      ],
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
