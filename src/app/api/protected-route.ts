// // pages/api/protected-route.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { createServerSupabaseClient } from '@/utils/supabase-server';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const supabase = createServerSupabaseClient({ req, res });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   // Proceed with authenticated user
//   res.status(200).json({ message: 'Success', user: session.user });
// }
