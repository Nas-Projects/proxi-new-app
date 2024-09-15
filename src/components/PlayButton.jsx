import clsx from 'clsx'

export const PlayButton = (props) => {
  console.log('PLAY BUTTON PL', props.btnZindex)
  return (
    <button
      onClick={() => props.onClick()}
      aria-label="play"
      className={clsx(
        props.btnZindex,
        props.className
          ? [props.className, 'hover:bg-sky-300']
          : 'md:hover:bg-sky-100',
        'mpc-large-play mpc-player__large-play border-rounded-full border-1 rounded-full border-solid border-indigo-600  hover:bg-sky-100'
      )}
    >
      <div class="mpc-large-play__circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mpc-large-play__icon"
        >
          <path d="M8 5v14l11-7z"></path>{' '}
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </div>
    </button>
  )
}
