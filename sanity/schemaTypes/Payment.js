// schemas/payment.js

export default {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      {
        name: 'method',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: [
            { title: 'Check', value: 'Check' },
            { title: 'Crypto Transfer', value: 'Crypto Transfer' },
            { title: 'PayPal', value: 'PayPal' },
            { title: 'Venmo', value: 'Venmo' },
            { title: 'Cash', value: 'Cash' },
            { title: 'Credit Card', value: 'Credit Card' },
            { title: 'Bank Transfer', value: 'Bank Transfer' },
          ],
          required: true,
        },
      },
      {
        name: 'details',
        title: 'Payment Details',
        type: 'object',
        fields: [
          { name: 'accountNumber', title: 'Account Number', type: 'string' },
          { name: 'walletAddress', title: 'Wallet Address', type: 'string' },
          // Add more fields as necessary
        ],
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: { default: new Date().toISOString() }, // Default to current date
      },
    ],
  };
  