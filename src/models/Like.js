import mongoose, { models, Schema, model } from 'mongoose';

const LikeSchema = new Schema({
  contentId: { 
    type: Schema.Types.ObjectId, 
    required: true 
  },
  contentType: { 
    type: String, 
    enum: ['Blog', 'Project', 'Post', 'EntrepreneurProject'], 
    required: true 
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
}, {
  timestamps: true,
});

// Ensure a user can only like a specific content once
LikeSchema.index({ contentId: 1, contentType: 1, userId: 1 }, { unique: true });

// Check if the model already exists before defining it
const Like = models.Like || model('Like', LikeSchema);

export default Like;
