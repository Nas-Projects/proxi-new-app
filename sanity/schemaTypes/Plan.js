export default {
    name: 'plan',
    title: 'Plan',
    type: 'document',
    fields: [
      { name: 'title', title: 'Plan Title', type: 'string' },
      { name: 'price', title: 'Price', type: 'string' },
      { name: 'description', title: 'Plan Description', type: 'text' },
      {
        name: 'details',
        title: 'Plan Details',
        type: 'array',
        of: [{ type: 'string' }],
      },
      { name: 'paymentMode', title: 'Payment Mode', type: 'string' },
    ],
  };
  