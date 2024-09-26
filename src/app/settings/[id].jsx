export default function Setting() {
  return <h1>Setting</h1>
}

// export async function getStaticPaths() {
//   const data  = await fetchExercices();
//   console.log('EXERCICES-->', data)
 
//   //  const exercise = await getById(allExercises, params.id)
//   console.log('EXCERSISE DATA-->', data)

//   return {
//     paths: data.excercises.map(({ _id }) => ({
//       params: {
//         id: _id.toString(),
//       },
//     })),
//     fallback: 'blocking',
//   }
// }
