import clsx from 'clsx'

export const PlayPauseButtons = ({ playing, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 10"
      fill="text-white"
      {...props}
      className={props.className}
    >
      {playing ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
        />
      ) : (
        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
      )}
    </svg>
  )
}
export function PlayPauseIcon({ btnZindex, playing, className, ...props }) {
  return (
    <div id="PLAY_PAUSE_ROUND" className={clsx(btnZindex && btnZindex)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        fill="text-white"
        {...props}
        className={props.className}
      >
        {playing ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
          />
        ) : (
          <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
        )}
      </svg>
    </div>
  )
}
