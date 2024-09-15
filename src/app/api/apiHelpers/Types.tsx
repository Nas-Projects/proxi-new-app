// Import relevant types from your database client (like Prisma)
import User from "@/models/User";
  import   Comment from "@/models/Comment"
  import Follows from "@/models/Follows"
  import  Like from "@/models/Like"
  import SavedPost from "@/models/SavedPost"
  import Post from "@/models/Post"

  // Define types for Comments and Likes with additional user information
  export type CommentWithExtras = Comment & { user: User };
  export type LikeWithExtras = Like & { user: User };
  
  // Define type for Posts with additional information
  export type PostWithExtras = Post & {
    comments: CommentWithExtras[];
    likes: LikeWithExtras[];
    savedBy: SavedPost[];
    user: User;
  };
  
  // Define types for Follows, including user information
  export type FollowerWithExtras = Follows & { follower: User };
  export type FollowingWithExtras = Follows & { following: User };
  
  // Define the main `UserProfile` type that you'll use in your components
  export type UserProfile = User & {
    posts: PostWithExtras[];
    savedPosts: SavedPost[];
    followedBy: FollowerWithExtras[];
    following: FollowingWithExtras[];
    likes: LikeWithExtras[];
  };
  