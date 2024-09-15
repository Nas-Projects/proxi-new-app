import mongoose, { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  caption: { type: String, required: true },
  fileUrl: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }],
  savedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavedPost' }],
}, { timestamps: true });

const Post = models.Post || model('Post', PostSchema);

export default Post;

