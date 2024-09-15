// src/utils/supabase-server.ts

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { GetServerSidePropsContext } from 'next';

export const createServerSupabaseClient = (ctx: GetServerSidePropsContext) => {
  return createServerSupabaseClient({
    req: ctx.req,
    res: ctx.res,
  });
};


// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

// export const createServerSupabaseClient = () => {
//   return createServerComponentClient({
//     cookies,
//   });
// };