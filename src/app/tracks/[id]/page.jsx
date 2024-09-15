
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";
import ProductPage from '@/components/ProductPage'
import localFont from "next/font/local";


const geistSans = localFont({
    src: "../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
// Fetch data using async/await in a Server Component
export async function getTrackById(id) {
  const query = groq`
    *[_type == "track" && _id == $id] {
      ...,
      benefits[]->,
      executions[]->,
      equipments[]->,
      exercises[]->
    }
  `;
  const track = await sanityClient.fetch(query, { id });
  return track;
}

export default async function ExercisePage({ params }) {
  const { id } = params; // This gets the [id] from the URL
  const fetchedTrack = await getTrackById(id);
  console.log("FETCHED_TRACK", fetchedTrack);
  if (!fetchedTrack || fetchedTrack.length === 0) {
    return <div>Track not found</div>;
  }

  const track = fetchedTrack[0];
  console.log("TRACK", track)

  return (
    <div>
          <ProductPage product={track}/>
      {/* <h1>{exerciseData.title}</h1>
      <p>{exerciseData.description}</p> */}
      {/* <ExerciseCard  exercise={exercise}/> */}
      {/* Display more exercise data as needed */}
    </div>
  );
}
