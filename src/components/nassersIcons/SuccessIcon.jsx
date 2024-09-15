export const SuccessIcon = function (props) {
  return (
    <div className="h-18 w-18 mx-auto flex items-center justify-center rounded-full bg-teal-100 p-2">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-6 w-6 text-green-600"
          x-description="Heroicon name: outline/check"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          ></path>
        </svg>
      </div>
    </div>
  )
}
