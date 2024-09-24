// schemas/reply.js

export default {
    name: 'reply',
    title: 'Reply',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'email as User ID',
        type: 'string',
        required: false,
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text',
        options: { required: true },
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'string',
        options: { required: true },
      },
      {
        name: 'commentId',
        title: 'Comment ID',
        type: 'reference',
        to: [{ type: 'comment' }],
        options: { required: true },
      },
      {
        name: 'likes',
        title: 'Likes',
        type: 'number',
        options: { default: 0 },
      },
      {
        name: 'reactions',
        title: 'Reactions',
        type: 'number',
        options: { default: 0 },
      },
      {
        name: 'timestamp',
        title: 'Timestamp',
        type: 'datetime',
        options: { default: () => new Date().toISOString() },
      },
    ],
    preview: {
      select: {
        title: 'body',
        subtitle: 'username',
      },
    },
  };
  