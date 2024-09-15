import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth';

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    console.loog("GET_SERVERSIDE_SESSION_USER_ID", session)

    if (!session || !session.user) {
      return null;
    }

    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
