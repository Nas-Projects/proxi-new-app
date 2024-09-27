
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
  usernames: string
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

// A static agent fallback (can be used if fetching fails)
export const staticAgent = {
  name: 'Marietou Safari',
  role: 'Rentals agent',
  imageUrl: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  xUrl: '#',
  linkedinUrl: '#',
  username: '@arietou_22',
  verified: true,
};

export default  async function AgentProfile({ params }: { params: { id: string } }) {
  const { id } = params;
  const agent = await sanityFetch<Agent>({ query: agentQuery, params });
  console.log("Post_Page_sanityFetch", agent)
  // const [agent, setAgent] = useState<Agent | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchAgent = async () => {
  //     // if (!id) return;

  //     try {
  //       // Fetch a single agent by ID
  //       const agentData: Agent = await sanityClient.fetch(
  //         `*[_type == "agent" && _id == $id][0]{
  //           _id, 
  //           name, 
  //           email, 
  //           phone, 
  //           image { asset->{url} }, 
  //           bio, 
  //           socials[]->{platform, url}
  //         }`,
  //         { id }
  //       );

  //       if (agentData) {
  //         // If the image exists, use the image URL
  //         const preparedAgent = {
  //           ...agentData,
  //           imageUrl: agentData.image ? urlFor(agentData.image).url() : '',
  //           socials: agentData.socials || [], // Ensure socials is at least an empty array
  //         };

  //         setAgent(preparedAgent); // Set the fetched and processed agent data
          
  //       } else {
  //         console.log("No agent found for ID:", id);
  //         setAgent(staticAgent); // Fallback to static agent if no data found
  //       }
  //     } catch (error) {
  //       console.error("Error fetching agent:", error);
  //       setAgent(staticAgent); // Fallback to static agent on error
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAgent();
  // }, [id]);

  // // Loading state
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // If no agent is found
  // if (!agent) {
  //   return <div>No agent found</div>;
  // }

  // Render the AgentComponent with the fetched agent
  return (
    <div className={clsx("min-h-[90vh] bg-black relative justify-center w-full")}>
      <AgentComponent agent={agent} />
    </div>
  );
}
