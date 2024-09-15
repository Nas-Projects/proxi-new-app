export function BellIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.438 8.063a5.563 5.563 0 0 1 11.125 0v2.626c0 1.182.34 2.34.982 3.332L17.5 15.5h-15l.955-1.479c.641-.993.982-2.15.982-3.332V8.062Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 15.5v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v0"
      />
    </svg>
  )
}

export function ArrowDownExpand({
  shadow,
  bg,
  cbVal,
  idx,
  handleExpandedItem,
}) {
  // console.log('CB-VAL', cbVal)
  return (
    <span
      onClick={() => handleExpandedItem(cbVal, idx)}
      className={`${
        (shadow && 'shadow-sm', bg ? bg : 'bg-sky-100')
      } ml-2 h-5 flex-none rounded  text-gray-900   group-hover:bg-slate-200 group-hover:text-slate-900`}
      x-description='Active: "bg-sky-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible"'
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  )
}
