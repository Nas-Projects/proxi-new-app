"use client";

import { useState, useEffect } from "react";
import Page from "@/components/Page"; 
import fetchExercices from "@/api/fetchExercices"; // Ensure the path is correct

export default function Excercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        // Call fetchExercices directly instead of fetching via API route
        const data = await fetchExercices();
        console.log("TEXERCISES_IN_EXERCISES_PAGE", data )
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#76777a33]">
      <Page pageContent={exercises} />
    </div>
  );
}
