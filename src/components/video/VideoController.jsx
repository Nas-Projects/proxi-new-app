import React, { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
// import video from '../../public/video-meditation.mp4'
import useVideoPlayer from '@/components/useVideoPlayer'
import {
  PlayPauseButtons,
  PlayPauseIcon,
} from '@/components/video/PlayPauseButtons'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Comments } from '../Comments'
import { PeopleWatched } from '../PeopleWhowatch'
import { VideoStats } from './VideoStats'
import { VideoComments } from './VideoComments'
import Dropdown from './ViewersDropdown'
import ViewersDropdown from './ViewersDropdown'
import { PlayButton } from '../PlayButton'
const VideoController = ({ media }) => {
  const [likes, setLikes] = useState(media.likes)
  const [views, setViews] = useState(media.views)

  const addLikes = () => {
    // event.preventDefault()
    console.log('ADD_todo FIRED')

    setLikes(likes + 1)
  }
  const addViews = () => {
    // event.preventDefault()
    console.log('ADD_todo FIRED')
    togglePlay()
    setViews(views + 1)
  }

  function saveMedia(event) {
    event.preventDefault()
    alert('Sharing ....')
  }

  //     const [playerState, setPlayerState] = useState({
  //     isPlaying: false,
  //     progress: 0,
  //     speed: 1,
  //     isMuted: false
  // });

  // // and then...
  // setPlayerState({
  //     ...playerState,
  //     isPlaying: true
  // });
  //   const [playing, setPlaying] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const [speed, setSpeed] = useState(1);
  // const [muted, setMuted] = useState(false);

  // // and then...
  // setPlaying(true);
  const videoElement = useRef(null)
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement)
  return (
    <div className="container mb-24 md:mb-36">
      <div
        id="video-container"
        // className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2"
      >
        <Video
          videoElement={videoElement}
          media={media}
          addViews={addViews}
          playerState={playerState}
          handleVideoProgress={handleVideoProgress}
          togglePlay={togglePlay}
          toggleMute={toggleMute}
          handleVideoSpeed={handleVideoSpeed}
          handleOnTimeUpdate={handleOnTimeUpdate}
        />
        <VideoStats
          media={media}
          likes={likes}
          addLikes={addLikes}
          views={views}
          saveMedia={saveMedia}
        />
        {/* <SeeComments /> */}
        {/* <PeopleWatched /> */}
        {/* <VideoComments /> */}
      </div>
    </div>
  )
}

export default VideoController

const Video = ({
  playerState,
  handleVideoProgress,
  togglePlay,
  toggleMute,
  handleVideoSpeed,
  media,
  handleOnTimeUpdate,
  videoElement,
  addViews,
}) => {
  return (
    <div className="video-wrapper">
      <video
        src={media.source}
        //   src="/video-meditation.mp4"
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      />{' '}
      <button
        // onClick={addViews}
        className={clsx(
          ' bg- absolute top-1/2 h-3 h-7 w-3 translate-x-[40%]  rounded-full  px-3 lg:h-10  lg:h-10  lg:w-10 lg:px-5  lg:py-1',
          playerState.isPlaying ? ' opacity-0' : 'opacity-1 z-30'
        )}
      >
        <PlayButton onClick={addViews} />
        {/* <PlayPauseIcon
          className="fill-white lg:h-10  lg:h-10  lg:w-10 lg:px-5  lg:py-1"
          onClick={togglePlay}
          btnZindex={
            playerState.isPlaying ? 'z-50 opacity-0' : 'z-50 opacity-1'
          }
        /> */}
      </button>{' '}
      <div
        id="VIDEO_ CONTROLS"
        className="controls flex-block h-15  md:h-18 relative px-0  "
      >
        <div className="flex-block w-full bg-slate-900 ">
          <div
            className={clsx(
              ' bg-gray-70 bg-slate-600/80',
              `width-${[playerState.progress]}`
            )}
          >
            <input
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
              type="range"
              className={clsx(
                'w-[100%] bg-sky-400',
                `width-${[playerState.progress]}`
              )}
            />
          </div>
          <footer class="-mt-2 flex  w-full bg-black px-2 pb-2 text-white shadow group-hover:bg-slate-100/30 group-hover:text-4xl group-hover:text-slate-100 dark:bg-gray-800 lg:-mt-0">
            <div className=" mx-auto flex w-full max-w-screen-xl justify-between px-3 md:items-center xl:px-5">
              <div id="play-volume" className="mt-2 -mb-1 inline-flex md:mb-2">
                <button
                  onClick={togglePlay}
                  className=" h-7 rounded-lg px-3 lg:h-10  lg:px-5 lg:py-1 "
                >
                  <PlayPauseButtons
                    playing={playerState.isPlaying}
                    className="h-3 w-3 fill-white lg:h-5 lg:w-5"
                  />
                </button>{' '}
                <button
                  className="volume-setings  -mt-1 h-9 w-12 pl-3 lg:-mt-0 lg:h-9"
                  onClick={toggleMute}
                >
                  {!playerState.isMuted ? (
                    <i className="bx bxs-volume-full"></i>
                  ) : (
                    ''
                  )}
                  <svg
                    height="100%"
                    version="1.1"
                    viewBox="0 0 36 36"
                    width="100%"
                  >
                    <defs>
                      <clipPath id="ytp-svg-volume-animation-mask">
                        <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                        <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                        <path
                          class="ytp-svg-volume-animation-mover"
                          d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                          transform="translate(0, 0)"
                        ></path>
                      </clipPath>
                      <clipPath id="ytp-svg-volume-animation-slash-mask">
                        <path
                          class="ytp-svg-volume-animation-mover"
                          d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                          transform="translate(0, 0)"
                        ></path>
                      </clipPath>
                    </defs>
                    <path
                      class="ytp-svg-fill ytp-svg-volume-animation-speaker"
                      clip-path="url(#ytp-svg-volume-animation-mask)"
                      d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                      fill="#fff"
                      id="ytp-id-15"
                    ></path>
                    <path
                      class="ytp-svg-fill ytp-svg-volume-animation-hider"
                      clip-path="url(#ytp-svg-volume-animation-slash-mask)"
                      d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
                      fill="#fff"
                      id="ytp-id-16"
                      // style="display: none;"
                    ></path>
                  </svg>
                </button>{' '}
              </div>{' '}
              <ul class="mt-0.5 flex flex-wrap items-center text-sm font-bold text-white dark:text-gray-400 sm:mt-0 md:mt-3">
                <div id="video-setting" className=" md:justify-end  ">
                  <select
                    className="flex h-6 bg-slate-800 text-white"
                    value={playerState.speed}
                    onChange={(e) => handleVideoSpeed(e)}
                  >
                    <option value="0.50">0.50x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="2">2x</option>
                  </select>
                </div>{' '}
              </ul>
              {/* </div> */}
            </div>
          </footer>
        </div>{' '}
      </div>
      {media.thumbnail && (
        <Image
          src={media.thumbnail}
          alt=""
          width="320"
          height="180"
          // fill
          // sizes={image1.size}
          optimized
          priority
          className={clsx(
            playerState.isPlaying ? 'hidden opacity-0' : 'z-10',
            'iframe absolute inset-0 h-full w-full  rounded-md object-cover opacity-[1] ring-1   ring-inset'
          )}
        />
      )}
    </div>
  )
}

const SeeComments = () => {
  return (
    <div className="relative mt-4">
      <div className=" border-b border-t border-slate-200 py-2 pr-2 dark:border-slate-400/20">
        <span className="text-slate-900 ">200 +</span> Comments
      </div>
    </div>
  )
}
