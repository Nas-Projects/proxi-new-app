export default {
  name: "progress",
  title: "Progress",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Track Progress",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
      description: "Progress of track from 0 to 100%",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
      description: "Points achieved in the progress",
    },
    {
      name: "isCompleted",
      title: "Is Completed",
      type: "boolean",
      description: "Indicates if the track is completed",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
