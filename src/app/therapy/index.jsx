import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
// import { getAllArticles } from '@/lib/getAllArticles'
import Image from 'next/image'
import { PlayButton } from '@/components/PlayButton'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { VideoComponent } from '@/components/video/VideoComponent'
import VideoController from '@/components/video/VideoController'
import { getItems } from '@/lib/getItems'
import sandraVideo from '../../../public/sandra-video-1.png'
function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/videos/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ videos }) {
  const container = 'relative mx-auto max-w-5xl bg-white'
  const grid = 'grid-clols-1 grid md:grid-cols-2'
  const freeWarapper = 'relative px-4 sm:px-8 lg:px-12 lg:px-44 xl:px-64 py-20'

  console.log('VIDEOSSSS  ', videos)
  const videoEpisodes = [
    {
      title: 'Meditation 1',
      source: '/Affirmations-by-jason.mp4',
      // thumbnail: '/sandra-video-1.png',
      //   // source: sandraVideo,
      thumbnail: sandraVideo,
      description:
        "Beyond 30's' Afirmations Just looking to relax or hoping to enjoy a yoga session to calming music or deep sleep.",
    },
    {
      title: 'What is gropup Therapy?',
      source: '/WhatisGroupTherapy_v144P.mp4',
      // thumbnail: '/sandra-video-2.jpeg',
      description: 'Group Therapy Session: What it’s Really Like',
    },
    {
      title: 'Group Therapy Session (34)',
      source: '/GroupTherapy1.mp4',
      thumbnail: '/sandra-video-2.jpeg',
      description: 'Group Therapy Session: What it’s Really Like',
    },

    {
      title: 'Healing Sounds',
      source: '/video-meditation.mp4',
      thumbnail: '/sandra-video-2.jpeg',
      description: 'GroupTherapySessionWhatits Really Like_144p.3gp',
    },
  ]
  return (
    <>
      <Head>
        <title>Articles -Omari Hills</title>
        <meta
          name="description"
          content="All Recent Episodes byOmari Hills"
        />
      </Head>{' '}
      <SimpleLayout
        title="Therapies byOmari Hills"
        // intro=" ⚡️Late 30s and 40s discussions
        // 💃🏻Cycle synching
        // 🦋-Hormonal health by upgrading nutrition, exercise, mind &
        // habits 💌"
      >
        <Search />
        <div id="video-container" className="mx-0">
          {videos[0].resources.map((content) => {
            return <VideoController key={content.title} media={content} />
          })}
        </div>

        {/* <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {videos.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div> */}
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      videos: (await getItems('therapies')).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}

const Search = () => {
  return (
    <form className="group relative relative my-20 flex  max-w-xl">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-400 group-focus-within:text-blue-500"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        className="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        aria-label="Find Therapies"
        placeholder="Find Therapies..."
      />
    </form>
  )
}
