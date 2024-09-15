import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  type: {
    type: String, // Allows any string value
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  url: {
    type: String, // URL or path to the relevant item
    required: true,
  },
  viewed: {
    type: Boolean, // Indicates whether the notification has been viewed
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);

export default Notification;


// models/Notification.js
// import mongoose from 'mongoose';

// const NotificationSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     enum: ['task_assigned', 'task_completed'],
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Notification = mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);

// export default Notification;

// models/Notification.js
