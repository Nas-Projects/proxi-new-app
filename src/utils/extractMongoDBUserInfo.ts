// interface Flags {
//   canSell: boolean;
//   canRent: boolean;
//   canList: boolean;
// }

// interface UserInfo {
//   userId: string;
//   _id: string;
//   email: string;
//   name: string;
//   first_name?: string;
//   last_name?: string;
//   username?: string;
//   bio?: string;
//   website?: string;
//   gender?: string;
//   phone?: string;
//   image?: string | null;
//   emailVerified: boolean;
//   isBlockchainBased: boolean;
//   realEstateLicense?: string;
//   lawyerLicense?: string;
//   walletAddress?: string | null;
//   flags: Flags;
//   userRole: string;
//   role: string;
//   supabaseUserId?: string;
//   googleUserId?: string;
// }

// export function extractMongoDBUserInfo(
//   user: Partial<UserInfo> | null
// ): UserInfo | null {
//   if (!user) {
//     return null;
//   }

//   const userId = user._id?.toString() || '';
//   const email = user.email || '';
//   const role = user.role || 'unauthenticated';
//   const name = user.first_name || user.name || email;
//   const username = user.username || '';
//   const bio = user.bio || '';
//   const website = user.website || '';
//   const gender = user.gender || '';
//   const phone = user.phone || '';
//   const image = user.image || null;

//   const emailVerified = user.emailVerified || false;
//   const isBlockchainBased = user.isBlockchainBased || false;
//   const realEstateLicense = user.realEstateLicense || '';
//   const lawyerLicense = user.lawyerLicense || '';
//   const walletAddress = user.walletAddress || null;

//   const flags = {
//     canSell: user.flags?.canSell || false,
//     canRent: user.flags?.canRent || false,
//     canList: user.flags?.canList || false,
//   };

//   const userRole = user.userRole || 'Other';
//   const supabaseUserId = user.supabaseUserId || '';
//   const googleUserId = user.googleUserId || '';

//   return {
//     userId,
//     email,
//     name,
//     username,
//     bio,
//     website,
//     gender,
//     phone,
//     image,
//     emailVerified,
//     isBlockchainBased,
//     realEstateLicense,
//     lawyerLicense,
//     walletAddress,
//     flags,
//     userRole,
//     role,
//     supabaseUserId,
//     googleUserId,
//   };
// }
