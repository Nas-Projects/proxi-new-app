import mongoose from 'mongoose'; 

const { Schema, model, models } = mongoose; 

const BadgeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  earnedAt: { type: Date, default: Date.now },
});

const UserSchema = new Schema(
  {
    name: { type: String },
    username: { type: String, unique: true },
    bio: { type: String },
    website: { type: String },
    gender: { type: String },
    email: { type: String, unique: true },
    phone: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    savedItems: [
      {
        contentId: { type: Schema.Types.ObjectId, required: true },
        contentType: { type: String, enum: ['Property', 'Post'], required: true },
      },
    ],
    likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }],
    followedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
    sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],
    badges: [BadgeSchema],
    emailVerified: {
      type: Boolean,
      default: false,
    },
    isBlockchainBased: {
      type: Boolean,
      default: false,
    },
    realEstateLicense: {
      type: String,
      required: function() {
        return this.userRole === 'Agent' || this.userRole === 'Broker';
      },
    },
    lawyerLicense: {
      type: String,
      required: function() {
        return this.userRole === 'Lawyer';
      },
    },
    walletAddress: {
      type: String, // For blockchain-based users
      default: null,
    },
    flags: {
      canSell: { type: Boolean, default: false },
      canRent: { type: Boolean, default: false },
      canList: { type: Boolean, default: false },
    },
    payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
    plan: { type: Schema.Types.ObjectId, ref: 'Plan', default: null },

    // Group owned properties
    groupOwnedProperties: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
        default: null,  // Properties user co-owns in a group purchase
      }
    ],

    // Application-specific role (Agent, Broker, Lawyer, etc.)
    userRole: {
      type: String,
      required: true,
      enum: ['Admin', 'Agent', 'Broker', 'Lawyer', 'Owner', 'Prospect', 'Other'],
      default: 'Other',
    },

    // Supabase role for authentication status
    role: {
      type: String, // Values like 'authenticated' or 'unauthenticated'
      default: 'unauthenticated',
    },

    // Supabase user ID to track sign-ins via Supabase
    supabaseUserId: {
      type: String,
      unique: true,
      sparse: true, // Allows `null` values without causing a unique constraint error
    }, 
    googleUserId: {
      type: String,
      unique: true,
      sparse: true, // Allows `null` values without causing a unique constraint error
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', UserSchema);

export default User;
