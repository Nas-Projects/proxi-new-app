import Link from "next/link";
import BlurImage from "./blur-image";

export default function WIP({status, title, message, image, }) {
    return (
      <>
        <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
          <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
            <a href="#">
              <span className="sr-only">Your Company</span>
          
            </a>
          </header>
          <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className=" lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <BlurImage
              alt=""
              src={image ?  image : "/photo-1470847355775-e0e3c35a9a2c.jpeg"}
              className="absolute inset-0 h-full w-full object-cover"
              height={600}
              width={300}

/>
          </div>
            <div className="max-w-lg max-[600px]:absolute inset-y-[30vh] inset-x-0 px-6">
              <p className="text-base font-semibold leading-8 !text-[58px] text-pink-600 mb-5">{status ? status : "404"}</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title ? title : "Page work in process"}</h1>
              <p className="mt-6 text-base leading-7 text-gray-600 max-[600px]:text-white font-bold">
              {message ? message : "Sorry, we couldn&apos;t find the page you&apos;re looking for."} 
              </p>
              <div className="mt-10">
                <Link href="/" className="text-sm font-semibold leading-7 text-pink-600 !text-[18px] ">
                  <span aria-hidden="true">&larr;</span> Back to safety 
                </Link>
              </div>
            </div>
          </main>
          <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <div className="border-t border-gray-100 bg-gray-50 py-10">
              <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
                <Link href="/contact">Contact support</Link>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <Link href="/contact">Status</Link>
              </nav>
            </div>
          </footer>
          <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <BlurImage
              alt=""
              src={image ?  image : "/photo-1470847355775-e0e3c35a9a2c.jpeg"}
              className="absolute inset-0 h-full w-full object-cover"
              height={600}
              width={300}

/>
          </div>
        </div>
      </>
    )
  }
  