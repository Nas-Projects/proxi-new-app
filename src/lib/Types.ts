import mongoose from 'mongoose';

// Existing types
export type UserLike = {
  id: string;
  user_id: string;
  content_id: string;
  created_at: string;
};

export type UserComment = {
  id: string;
  user_id: string;
  content_id: string;
  content: string;
  created_at: string;
};

export type UserPost = {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  comments: UserComment[];
  likes: UserLike[];
  savedBy: string[]; // Array of user IDs who saved the post
};

// New types for flags, payments, etc.
export type UserFlags = {
  canSell: boolean;
  canRent: boolean;
  canList: boolean;
};

export type PaymentDetails = {
  [key: string]: string; // Define the key-value pair for payment details
};

export type Payment = {
  id: string;
  method: string;
  details: PaymentDetails;
  createdAt: Date;
};

// Define an enum for user roles
export type UserRole = 'Admin' | 'Agent' | 'Broker' | 'Lawyer' | 'Owner' | 'Prospect' | 'Other';

export type UserProfileMongoDBWithExtras = {
  savedPosts: UserPost[];
  likes: UserLike[];
  comments: UserComment[];
  name?: string;
  username?: string;
  bio?: string;
  website?: string;
  gender?: string;
  email?: string;
  phone?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  posts?: mongoose.Types.ObjectId[] | UserPost[]; // Reference to Post model
  badges?: IBadge[];
  emailVerified: boolean;
  isBlockchainBased: boolean;
  realEstateLicense?: string;
  lawyerLicense?: string;
  walletAddress?: string | null;
  flags: UserFlags;
  payments?: mongoose.Types.ObjectId[]; // Array of Payment ObjectIds
  plan?: mongoose.Types.ObjectId | null; // Reference to Plan or null
  groupOwnedProperties?: mongoose.Types.ObjectId[] | null; // Array of Property ObjectIds
  userRole: UserRole;
  role: string; // e.g., 'authenticated' or 'unauthenticated'
  [key: string]: unknown; // For any other unspecified fields
  verified?: boolean;
};

// Badge interface
export interface IBadge {
  name: string;
  description?: string;
  earnedAt?: Date;
}
