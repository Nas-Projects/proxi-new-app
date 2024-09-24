// schemas/offer.js

export default {
    name: 'offer',
    title: 'Offer',
    type: 'document',
    fields: [
      {
        name: 'property',
        title: 'Property',
        type: 'reference',
        to: [{ type: 'property' }], // Reference to the property
        options: { required: true },
      },
      {
        name: 'client',
        title: 'Client',
        type: 'reference',
        to: [{ type: 'client' }], // Reference to the client
        options: { required: true },
      },
      {
        name: 'agent',
        title: 'Agent',
        type: 'reference',
        to: [{ type: 'agent' }], // Reference to the agent handling the offer
        options: { required: true },
      },
      {
        name: 'amountOffered',
        title: 'Amount Offered',
        type: 'number',
        options: { required: true },
      },
      {
        name: 'askingPrice',
        title: 'Asking Price',
        type: 'number', // Can be linked to the property if needed
        options: { required: true },
      },
      {
        name: 'submittedBy',
        title: 'Submitted By',
        type: 'reference',
        to: [{ type: 'client' }], // Reference to the client who submitted the offer
        options: { required: true },
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        options: { required: true },
      },
      {
        name: 'notes',
        title: 'Notes',
        type: 'text',
      },
    ],
  };
  