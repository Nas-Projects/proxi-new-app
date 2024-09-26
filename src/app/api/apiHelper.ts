import clientPromise from './apiHelpers/mongodb';
// import { remark } from 'remark';
// import remarkMdx from 'remark-mdx';
// import { serialize } from 'next-mdx-remote/serialize';
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { revalidatePath, unstable_noStore as noStore, unstable_noStore } from 'next/cache';

// import { ObjectId } from 'mongodb';
// import clientPromise from '@/lib/mongodb'; //


export interface UserProps {
  name: string;
  username: string;
  email: string;
  image: string;
  bio: string;
  followers: number;
  verified: boolean;
  website?: string;
  gender?: string;
  emailVerified?: Date;
  createdAt: string | null;
  updatedAt: string | null;
  posts: string[];
  savedPosts: string[];
  savedItems: {
    contentId: string;
    contentType: 'Blog' | 'Project' | 'EntrepreneurProject' | 'Post';
  }[];
  likes: string[];
  followedBy: string[];
  following: string[];
  accounts: string[];
  sessions: string[];
  messages: {
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
  }[];
  tickets: {
    userId: string;
    projectId: string;
    status: 'open' | 'accepted' | 'resolved';
    requestDetails: string;
    responses: {
      adminId?: string;
      responseContent?: string;
      timestamp: string;
    }[];
  }[];
  bookmarks: string[];
  projectsStarted: string[];
  plans: string[];
  payments: string[];
  entrepreneurProjects: string[];
}

// export async function getUser(email: string) {
//   const client = await clientPromise;
//   const db = client.db('property-pulse');
//   const collection = db.collection('users');

//   const user = await collection.findOne({ email });
//   console.log("USER_IN_GET_USER", user);
//   if (!user) return null;

//   const parsedUser = {
//     _id: user._id.toString(),
//     id: user._id.toString(),
//     email: user.email,
//     username: user.username,
//     image: user.image,
//     bookmarks: user.bookmarks,
//     projectsStarted: user.projectsStarted,
//     createdAt: user.createdAt ? user.createdAt.toISOString() : null,
//     updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
//     followedBy: user.followedBy.map((id: { toString: () => string }) => id.toString()),
//     following: user.following.map((id: { toString: () => string }) => id.toString()),
//     phone: user.phone,
//     bio: user.bio,
//     website: user.website,
//     emailVerified: user.emailVerified ? user.emailVerified.toString() : null,
//     posts: user.posts?.map((id: { toString: () => string }) => id.toString()),
//     savedPosts: user.savedPosts?.map((id: { toString: () => string }) => id.toString()),
//     savedItems: user.savedItems?.map((item: { contentId: { toString: () => string }; contentType: string }) => ({
//       contentId: item.contentId.toString(),
//       contentType: item.contentType
//     })),
//     likes: user.likes?.map((id: { toString: () => string }) => id.toString()),
//     accounts: user.accounts?.map((id: { toString: () => string }) => id.toString()),
//     sessions: user.sessions?.map((id: { toString: () => string }) => id.toString()),
//     payments: user.payments?.map((id: { toString: () => string }) => id.toString()),
//     plan: user.plan ? user.plan.toString() : null,
//   };
  
//   console.log("IN_GET_USER_lib_api_user", parsedUser);
//   return parsedUser;
// }
// export interface UserProps {
//   name: string;
//   username: any;
//   email: string;
//   image: string;
//   bio: string;
//   bioMdx: MDXRemoteSerializeResult<Record<string, unknown>>;
//   followers: number;
//   verified: boolean;
//   website?: string;
//   gender?: string;
//   emailVerified?: Date;
//   createdAt: string | null; // Allow null
//   updatedAt: string | null; // Allow null
//   posts: string[]; // Array of post IDs as strings
//   savedPosts: string[]; // Array of saved post IDs as strings
//   savedItems: {
//     contentId: string; // Converted to string for serialization
//     contentType: 'Blog' | 'Project' | 'EntrepreneurProject' | 'Post';
//   }[];
//   likes: string[]; // Array of like IDs as strings
//   followedBy: string[]; // Array of user IDs who follow this user as strings
//   following: string[]; // Array of user IDs this user is following as strings
//   accounts: string[]; // Array of account IDs as strings
//   sessions: string[]; // Array of session IDs as strings
//   messages: {
//     senderId: string; // Converted to string for serialization
//     receiverId: string; // Converted to string for serialization
//     content: string;
//     timestamp: string; // Converted to string for serialization
//   }[];
//   tickets: {
//     userId: string; // Converted to string for serialization
//     projectId: string; // Converted to string for serialization
//     status: 'open' | 'accepted' | 'resolved';
//     requestDetails: string;
//     responses: {
//       adminId?: string; // Converted to string for serialization, optional
//       responseContent?: string;
//       timestamp: string; // Converted to string for serialization
//     }[];
//   }[];
//   bookmarks: string[]; // Array of bookmarked project IDs as strings
//   projectsStarted: string[]; // Array of started project IDs as strings
//   plans: string[]; // Array of plan IDs as strings
//   payments: string[]; // Array of payment IDs as strings
//   entrepreneurProjects: string[]; // Array of entrepreneur project IDs as strings
//   // comments: {
//   //   contentId: string; // Converted to string for serialization
//   //   contentType: 'Blog' | 'Project' | 'EntrepreneurProject' | 'Post';
//   //   comment: string;
//   //   avatar: string; // Store the avatar URL directly
//   //   username: string; // Store the username directly
//   //   reactions: string[]; // Array to store reactions like "👍", "❤️", etc.
//   //   replies: {
//   //     userId: any;
//   //     createdAt: any;
//   //     updatedAt: any;
//   //     senderId: string; // Converted to string for serialization
//   //     body: string;
//   //     avatar: string; // Store the avatar URL directly
//   //     username: string; // Store the username directly
//   //     likes: string[]; // Array of user IDs who liked the reply as strings
//   //     timestamp: string; // Converted to string for serialization
//   //     commentId: string; // Converted to string for serialization
//   //   }[];
//     // likes: string[]; // Array of user IDs who liked the comment as strings
//     // isPinned: boolean; // Indicates if the comment is pinned
//   //   createdAt: string; // Converted to string for serialization
//   //   updatedAt: string; // Converted to string for serialization
//   // }[];
// }

// // export interface UsersProps {
// // users: UserProps[];
// // }


export interface ResultProps {
  // _id: string;
  users: UserProps[];
}

// export async function getMdxSource(postContents: string) {
//   // Use remark plugins to convert markdown into HTML string
//   const processedContent = await remark()
//     // Native remark plugin that parses markdown into MDX
//     .use(remarkMdx)
//     .process(postContents);

//   // Convert converted html to string format
//   const contentHtml = String(processedContent);

//   // Serialize the content string into MDX
//   const mdxSource = await serialize(contentHtml);

//   return mdxSource;
// }

export const placeholderBio = `
Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.

Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.`;


export async function getUser(email: string) {
  const client = await clientPromise;
  const db = client.db('property-pulse');
  const collection = db.collection('users');

  const user = await collection.findOne({ email });
    console.log("USER_IN_GET_USER", user);
  if (!user) return null;

  
const parsedUser = {
  _id: user._id.toString(),
  id: user._id.toString(),
  email: user.email,
  username: user.username,
  image: user.image,
  bookmarks: user.bookmarks, // Assuming this is a plain array
  projectsStarted: user.projectsStarted, // Assuming this is a plain array
  createdAt: user.createdAt ? user.createdAt.toISOString() : null,
  updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
  followedBy: user.followedBy.map((id: { toString: () => any; }) => id.toString()),
  following: user.following.map((id: { toString: () => any; }) => id.toString()),
  phone: user.phone, // Assuming this is already a string
  bio: user.bio, // Assuming this is already a string
  website: user.website, // Assuming this is already a string
  emailVerified: user.emailVerified ? user.emailVerified.toString() : null,
  posts: user.posts?.map((id: { toString: () => any; }) => id.toString()),
  savedPosts: user.savedPosts?.map((id: { toString: () => any; }) => id.toString()),
  savedItems: user.savedItems?.map((item: { contentId: { toString: () => any; }; contentType: any; }) => ({
    contentId: item.contentId.toString(),
    contentType: item.contentType
  })),
  likes: user.likes?.map((id: { toString: () => any; }) => id.toString()),
  accounts: user.accounts?.map((id: { toString: () => any; }) => id.toString()),
  sessions: user.sessions?.map((id: { toString: () => any; }) => id.toString()),
  goalsCreatedForSelf: user.goalsCreatedForSelf?.map((id: { toString: () => any; }) => id.toString()),
  goalsCreatedForOthers: user.goalsCreatedForOthers?.map((id: { toString: () => any; }) => id.toString()),
  taskListsCreatedForSelf: user.taskListsCreatedForSelf?.map((id: { toString: () => any; }) => id.toString()),
  taskListsCreatedForOthers: user.taskListsCreatedForOthers?.map((id: { toString: () => any; }) => id.toString()),
  badges: user.badges?.map((badge: { icon: any; title: any; }) => ({
    icon: badge.icon,
    title: badge.title
  })),
  payments: user.payments?.map((id: { toString: () => any; }) => id.toString()),
  plan: user.plan ? user.plan.toString() : null, // Direct reference for quick access to plan
};
const userData = {
  ...parsedUser,
  // Explicitly convert any other fields again if necessary
  _id: user._id.toString(),
  id: user._id.toString(),
  createdAt: user.createdAt ? user.createdAt.toISOString() : null,
  updatedAt: user.updatedAt ? user.updatedAt.toString() : null,
  followedBy: user.followedBy.map((id: { toString: () => any; }) => id.toString()),
  following: user.following.map((id: { toString: () => any; }) => id.toString()),
};
  // Revalidate the path before returning the user data
  console.log("IN_GET_USER_lib_api_user", userData)
  // unstable_noStore()
  noStore()
 revalidatePath(`/${user.username}`);


  return userData;
  
}


export async function getFirstUser(): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  const results = await collection.findOne<UserProps>(
    {},
    {
      projection: { _id: 0, emailVerified: 0 }
    }
  );
  if (results) {
    return {
      ...results,
      // bioMdx: placeholderBio
    };
  } else {
    return null;
  }
}

export async function getAllUsers(): Promise<ResultProps[]> {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  console.log("COLLECTION_OF_USERS",  collection)
  unstable_noStore()
  revalidatePath(`/`);
  return await collection.aggregate<ResultProps>([
      {
        //sort by follower count
        $sort: {
          followers: -1
        }
      },
      {
        $limit: 100
      },
      {
        $group: {
          _id: {
            $toLower: { $substrCP: ['$name', 0, 1] }
          },
          users: {
            $push: {
              name: '$name',
              username: '$username',
              email: '$email',
              image: '$image',
              followers: '$followers',
              verified: '$verified'
            }
          },
          count: { $sum: 1 }
        }
      },
      {
        //sort alphabetically
        $sort: {
          _id: 1
        }
      }
    ])
    .toArray();
  
}


export async function searchUser(query: string): Promise<UserProps[]> {
  const client = await clientPromise;
  const collection = client.db('test').collection('users');
  return await collection
    .aggregate<UserProps>([
      {
        $search: {
          index: 'name-index',
          /* 
          name-index is a search index as follows:

          {
            "mappings": {
              "fields": {
                "followers": {
                  "type": "number"
                },
                "name": {
                  "analyzer": "lucene.whitespace",
                  "searchAnalyzer": "lucene.whitespace",
                  "type": "string"
                },
                "username": {
                  "type": "string"
                }
              }
            }
          }

          */
          text: {
            query: query,
            path: {
              wildcard: '*' // match on both name and username
            },
            fuzzy: {},
            score: {
              // search ranking algorithm: multiply relevance score by the log1p of follower count
              function: {
                multiply: [
                  {
                    score: 'relevance'
                  },
                  {
                    log1p: {
                      path: {
                        value: 'followers'
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        // filter out users that are not verified
        $match: {
          verified: true
        }
      },
      // limit to 10 results
      {
        $limit: 20
      },
      {
        $project: {
          _id: 0,
          emailVerified: 0,
          score: {
            $meta: 'searchScore'
          }
        }
      }
    ])
    .toArray();
}

export async function getUserCount(): Promise<number> {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  return await collection.countDocuments();
}

export async function updateUser(username: string, bio: string) {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  return await collection.updateOne({ username }, { $set: { bio } });
}
