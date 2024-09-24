// schemas/comment.js

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Email as User ID',
      type: 'string',
      required: false,
    },
    {
      name: 'contentId',
      title: 'Content ID',
      type: 'reference',
      to: [
        { type: 'property' }, // Reference to the property
        { type: 'blogPost' }      // Reference to the blog post (renamed from 'content' to 'post')
      ],
      options: { required: true },
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Property', value: 'Property' },
          { title: 'Blog', value: 'blogPost' },
        ],
        required: true,
      },
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      options: { required: true },
    },
    {
      name: 'replies',
      title: 'Replies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'reply' }] }],
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      options: { default: 0 },
    },
    {
      name: 'isPinned',
      title: 'Is Pinned',
      type: 'boolean',
      options: { default: false },
    },
  ],
  preview: {
    select: {
      title: 'comment',
      subtitle: 'username',
    },
  },
};
