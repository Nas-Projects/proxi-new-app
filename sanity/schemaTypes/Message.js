// schemas/message.js

export default {
    name: 'message',
    title: 'Message',
    type: 'document',
    fields: [
     {
        name: 'username',
        title: 'username or email as ID',
        type: 'string',
        required: true,
        },
      {
        name: 'recipient',
        title: 'Recipient',
        type: 'reference',
        to: [{ type: 'agent' }], // Changed to reference 'agent'
        options: { required: true },
      },
      {
        name: 'property',
        title: 'Property',
        type: 'reference',
        to: [{ type: 'property' }],
        options: { required: true },
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        options: { required: true },
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        options: { required: true },
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text',
      },
      {
        name: 'read',
        title: 'Read',
        type: 'boolean',
        options: { default: false },
      },
    ],
    preview: {
      select: {
        title: 'body',
        subtitle: 'name',
      },
    },
  };
  