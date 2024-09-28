import clsx from 'clsx';
import AgentComponent from "@/components/propertiesComponents/AgentPage.jsx";
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { agentQuery } from '@/sanity/lib/queries';

// Define the structure of an Agent
interface Agent {
  _id: string;
  name: string;
  email: string;
  phone: string;
  usernames: string;
  image: {
    asset: {
      url: string;
    };
  };
  bio: string;
  socials: {
    platform: string;
    url: string;
  }[];
}

export const revalidate = 60; // Optional: Revalidate the page every 60 seconds

export default async function AgentProfile({ params }: { params: { id: string } }) {
  // Fetch the agent data based on the provided ID
  const agent = await sanityFetch<Agent>({ query: agentQuery, params: { id: params.id } });

  if (!agent) {
    return <div>No agent found.</div>;
  }

  return (
    <div className={clsx("min-h-[90vh] bg-black relative justify-center w-full")}>
      <AgentComponent agent={agent} />
    </div>
  );
}
