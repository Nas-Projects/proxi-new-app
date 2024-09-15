import Image from 'next/image'
import clsx from 'clsx'
import { useWindowDimensions } from '@/lib/useWindowDimension.js'
import { useEffect, useMemo, useRef, useState } from 'react'
export const VideoComponent = ({ content, aspect, defaultAspect }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false)
  const [imageZindex, setImageZindex] = useState('z-[0.5]')
  const [videoZindex, setVideoZindex] = useState('z-20 ')
  let playerRef = useRef(null)
  // const videoElement = useRef(null)

  useEffect(
    (event) => {
      if (videoIsPlaying === true) {
        console.log('PLAYIER CURRENT REF', playerRef.current)

        if (playerRef.current) {
          playerRef.current.playVideo()
          // setImageZindex(' z-0 opacity-0 ease-linear duration-300')
        }
      }
      if (videoIsPlaying === false) {
        console.log('VIDEO NOT PLAYING')
        if (playerRef.current) {
          // videoElement.current.pauseVideo()
          // playerRef.current.pause()
        }
      }
    },
    [videoIsPlaying]
  )
  console.log('MEDIA COPNTENT', content)
  let { width, height } = useWindowDimensions()

  function handleOnclick(event) {
    console.log('EVENT', event)
    setVideoIsPlaying(true)
    setVideoZindex(' opacity-100 z-40  duration-300')
    // setImageZindex('transition-opacity opacity-0 z-0 ease-linear duration-300')
  }
  const defaultAspectRatio = 'aspect-[953/882] w-creen/2 max-w-[853px]'
  return (
    <div className="realtive dark:bg-dark sm:-mt-436 relative -mt-14 -mt-6 rounded-md pb-20 pt-4 md:-mt-0  lg:mb-64 lg:w-[500px] xl:-mt-24 xl:mb-64 xl:px-4">
      <>
        <VideoController media={content} />
        <div
          id={`${content.title}-ARTICLE_VIDEO`}
          className={clsx(
            videoZindex,
            'video-thumbnail relative mx-auto  mb-6 mt-4 block sm:mt-10 lg:mt-14 xl:pt-10 '
          )}
          // className="relative mx-auto mx-8 block overflow-hidden bg-black shadow-xl shadow-slate-200 dark:sm:rounded-xl lg:w-auto dark:lg:rounded-2xl"
          // aria-label="gallery-media-item"
        >
          {/* <iframe
            width="560"
            height="315"
            src={'https://www.youtube.com/embed/-lJuo7KB_n0'}
            // src={"https://www.youtube.com/embed/-lJuo7KB_n0"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ backgroundImage: 'url(/sandra-video-2.jpeg)' }}
          ></iframe>
          <YoutubeVideo
            // ref={playerRef}
            // className={clsx(videoZindex)}
            width="320"
            height="180"
            // minWidth="300"
            // width="560"
            // height="315"
            style={{ backgroundImage: 'url(/sandra-video-2.jpeg)' }}
            videoID={content.source}
          />
          <Image
            src={content.thumbnail}
            alt=""
            width="320"
            height="180"
            // fill
            // sizes={image1.size}
            className={clsx(
              videoIsPlaying ? 'hidden opacity-0' : imageZindex,
              'video-thumbnail absolute inset-0 h-full w-full  rounded-md object-cover opacity-[0.2] ring-1   ring-inset'
            )}
          /> */}
          {/* <PlayButton
            onClick={handleOnclick}
            btnZindex={videoIsPlaying ? 'z-0 opacity-0' : 'z-20 opacity-1'}
          /> */}
          {/* <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/10 dark:sm:rounded-xl dark:lg:rounded-2xl" /> */}
        </div>
      </>
    </div>
  )
}

import React from 'react'
import YouTube from 'react-youtube'
import { PlayButton } from '../PlayButton'
import VideoController from './VideoController'

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      // height: '100%',
      // width: '100%',
      playerVars: {
        autoplay: 1,
      },
    }

    return (
      <div id="YOUTUBE_VIDEO" className=" relative rounded-md">
        {/* <YouTube
          videoId={this.props.videoID}
          opts={opts}
          onReady={this._onReady}
        /> */}
        {/*  <iframe
          allow="autoplay; fullscreen"
          allowfullscreen=""
          src="https://player.vimeo.com/video/312333906?app_id=122963&amp;wmode=opaque&amp;autoplay=1"
          width="640"
          frameborder="0"
          title="The Stillness Within You"
          height="360"
          id="yui_3_17_2_1_1681612016015_1250"
          style={{ opacity: 1 }}
        ></iframe> */}
      </div>
    )
  }

  _onReady(event) {
    event.target.pauseVideo()
  }
}
