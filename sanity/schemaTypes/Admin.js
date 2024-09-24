// schemas/admin.js

export default {
    name: 'admin',
    title: 'Admin',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        options: { default: 'Ryan Magner' },
      },
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        options: { default: 'ryan@proxyre.io' },
      },
      {
        name: 'cell',
        title: 'Cell',
        type: 'string',
        options: { default: '8456415385' }, // Format as desired
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'email',
      },
    },
  };
  