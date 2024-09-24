// schemas/client.js

export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
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
        name: 'notes',
        title: 'Notes',
        type: 'text',
      },
    ],
  };
  