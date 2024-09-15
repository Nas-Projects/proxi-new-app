export default {
    name: 'contactSection',
    title: 'Contact Section',
    type: 'object',
    fields: [
      {
        name: 'image',
        title: 'Contact Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'form',
        title: 'Contact Form',
        type: 'string' // Adjust this field to whatever structure your form needs
      }
    ]
  }
  