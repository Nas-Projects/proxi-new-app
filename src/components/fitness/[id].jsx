// import { useMemo } from 'react'
// import Head from 'next/head'

// // import { getArt } from '@/lib/getArt'

// import { getAllArts } from '@/lib/getAllArts'

// import { ProjectLayout } from '@/components/ProjectLayout'

// const languages = ['en', 'fr', 'hn']

// export default function ArtPage({ art }) {
//   console.log('Art in ART CLIENT', art)
//   return (
//     <>
//       <Head>
//         <title>{`${art.name} - By Amit Kehar`}</title>
//         <meta name="description" content={art.description} />
//       </Head>
//       <article
//         id="project-page"
//         className="lg:border-t-0-16   border-slate-500 md:py-0 "
//       >
//         <ProjectLayout project={art} />
//       </article>
//     </>
//   )
// }

// export async function getStaticProps({ params }) {
//   console.log('PARAMS-IN-[ART]', params.artId)

//   return {
//     props: {
//       // art: await getArt(params.artId),
//     },
//     revalidate: 10,
//   }
// }

// export async function getStaticPaths() {
//   let items = await getAllArts()

//   return {
//     paths: items.map(({ id }) => ({
//       params: {
//         artId: id.toString(),
//       },
//     })),
//     fallback: 'blocking',
//   }
// }
