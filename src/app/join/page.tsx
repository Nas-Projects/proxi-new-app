
import JoinUsComponent from '../../components/JoinUsComponent'

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { joinUsQuery } from '../../../sanity/lib/queries'

// Structure of JoinUs Data (adjust as needed)
interface JoinUsDataType {
  introParagraph: string;
  sections: {
    title: string;
    content: string;
  }[];
}

export const revalidate = 60; // Optional: Revalidate the page every 60 seconds

export default async function JoinUsPage() {
  // Fetch the joinUs data from Sanity
  const joinUsData = await sanityFetch<JoinUsDataType[]>({ query: joinUsQuery });

  if (!joinUsData || joinUsData.length === 0) {
    return <div>No data found.</div>;
  }

  const data = joinUsData[0];

  return (
    <div className={'!relative min-h-screen'}>
      <JoinUsComponent joinUsData={data} />
    </div>
  );
}


