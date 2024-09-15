// app/exercises/[id]/page.jsx
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";
import ExerciseCard from "../../../components/cards/ExerciseCard.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
// Fetch data using async/await in a Server Component
export async function getExerciseById(id) {
  const query = groq`
    *[_type == "exercise" && _id == $id] {
      ...,
      tags[]->,
      categories[]->
    }
  `;
  const exercise = await sanityClient.fetch(query, { id });
  return exercise;
}

export default async function ExercisePage({ params }) {
  const { id } = params; // This gets the [id] from the URL
  const exercise = await getExerciseById(id);

  if (!exercise || exercise.length === 0) {
    return <div>Exercise not found</div>;
  }

  const exerciseData = exercise[0];

  return (
    <div>
 
      <ExerciseCard  exercise={exercise}/>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-12 xl:-mt-64  pb-24">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/exercises"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Exercises
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/tracks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
           Tracks
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact →
        </Link>
      </footer>
    </div>
  );
}
