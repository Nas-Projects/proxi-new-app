
import { Document } from 'mongoose';

export interface CommentWithExtras extends Document {
  user: any; // Populate with User
  body: string;
  postId: string;
}

export interface LikeWithExtras extends Document {
  user: any; // Populate with User
  postId: string;
}

export interface PostWithExtras extends Document {
  comments: CommentWithExtras[];
  likes: LikeWithExtras[];
  savedBy: any[]; // Populate with User
  user: any; // Populate with User
}

export interface UserWithFollows extends Document {
  following: any[]; // Populate with User
  followedBy: any[]; // Populate with User
}

export interface FollowerWithExtras extends Document {
  follower: UserWithFollows;
}

export interface FollowingWithExtras extends Document {
  following: UserWithFollows;
}

export interface UserWithExtras extends Document {
  posts: PostWithExtras[];
  saved: any[]; // Populate with User
  followedBy: FollowerWithExtras[];
  following: FollowingWithExtras[];
}
// import type {
//   Comment,
//   Follows,
//   Like,
//   Post,
//   SavedPost,
//   User,
// } from "@prisma/client";

// export type CommentWithExtras = Comment & { user: User };
// export type LikeWithExtras = Like & { user: User };

// export type PostWithExtras = Post & {
//   comments: CommentWithExtras[];
//   likes: LikeWithExtras[];
//   savedBy: SavedPost[];
//   user: User;
// };

// export type UserWithFollows = User & {
//   following: Follows[];
//   followedBy: Follows[];
// };

// export type FollowerWithExtras = Follows & { follower: UserWithFollows };
// export type FollowingWithExtras = Follows & { following: UserWithFollows };

// export type UserWithExtras = User & {
//   posts: Post[];
//   saved: SavedPost[];
//   followedBy: FollowerWithExtras[];
//   following: FollowingWithExtras[];
// };

