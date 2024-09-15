import mongoose, { Schema, model, models } from 'mongoose';

const ReplySchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  avatar: { type: String, required: true },
  username: { type: String, required: true },
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  reactions: [String],
  timestamp: { type: Date, default: Date.now },
});

const CommentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
  contentType: { type: String, enum: ['Blog', 'Project', 'EntrepreneurProject', 'Post'], required: true },
  comment: { type: String, required: true },
  avatar: { type: String, required: true },
  username: { type: String, required: true },
  reactions: [String],
  replies: [ReplySchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isPinned: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// Ensure that the Comment model is properly defined
const Comment = models.Comment || model('Comment', CommentSchema);

export default Comment;



// import mongoose, { Schema, model } from 'mongoose';
// import mongoose, { Schema, model, models } from 'mongoose'; // Use models to check if the model exists

// // Define the schema for replies to comments
// const ReplySchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   body: { type: String, required: true },
//   avatar: { type: String, required: true },
//   username: { type: String, required: true },
//   commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true },
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   reactions: [String],
//   timestamp: { type: Date, default: Date.now },
// });

// // Define the schema for comments
// const CommentSchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
//   contentType: { type: String, enum: ['Blog', 'Project', 'EntrepreneurProject', 'Post'], required: true },
//   comment: { type: String, required: true },
//   avatar: { type: String, required: true },
//   username: { type: String, required: true },
//   reactions: [String],
//   replies: [ReplySchema],
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   isPinned: { type: Boolean, default: false },
// }, {
//   timestamps: true,
// });

// // Export the Comment model or use the existing one if already compiled
// const Comment = models.Comment || model('Comment', CommentSchema);

// export default Comment;

// // Define the schema for replies to comments
// const ReplySchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   body: { type: String, required: true },
//   avatar: { type: String, required: true }, // Store the avatar URL directly
//   username: { type: String, required: true }, // Store the username directly
//   commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true }, // Reference to the comment being replied to
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of users who liked the reply
//   reactions: [String], // Array to store reactions like "👍", "❤️", etc.
//   timestamp: { type: Date, default: Date.now },
// });

// // Define the schema for comments
// const CommentSchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
//   contentType: { type: String, enum: ['Blog', 'Project', 'EntrepreneurProject', 'Post'], required: true },
//   comment: { type: String, required: true },
//   avatar: { type: String, required: true }, // Store the avatar URL directly
//   username: { type: String, required: true }, // Store the username directly
//   reactions: [String], // Array to store reactions like "👍", "❤️", etc.
//   replies: [ReplySchema], // Array of replies
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of users who liked the comment
//   isPinned: { type: Boolean, default: false }, // Indicates if the comment is pinned
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// }, {
//   timestamps: true,
// });

// // Create and export the Comment model
// const Comment = model('Comment', CommentSchema);

// export default Comment;
