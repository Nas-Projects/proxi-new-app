import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// import avatarImage from '../../public/amit-avatar.jpg'

import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import ToggleICon from './ToggleIcon'
import { SocialMedia } from './SocialMedia'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="text-white dark:text-[var(--themeColor)] block my-8 text-2xl uppercase dark:hover:text-white "
      >
        {children}
      </Popover.Button>
    </li>
  )
}

const transparent =
  'group flex items-center rounded-sm  py-2 text-sm font-medium backdrop-blur'
function MobileNavigation(props) {
  return (
    <Popover {...props} className={props.navButtonPossition}>
      <Popover.Button id="MENU_AS_CONTAINER_TOGGLE"
        className="md:!hidden group flex items-center  rounded-sm px-2 backdrop-blur mt-1  "
      >
        <Bars />
        {/* <ChevronDownIcon className="ml-3  h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" /> */}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm " />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-[[var(--themeColor)] "
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button
                aria-label="Close menu"
                className="-m-1 rounded-full border dark:border-[var(--themeColor2)] p-1"
              >
                <CloseIcon className="text-white h-6 w-6  outline-none dark:text-zinc-400" />
              </Popover.Button>
              {/* <h2 className="!text-white text-sm font-medium   dark:text-zinc-400 ">
                Menu
              </h2> */}
            </div>
            <nav id="mobile-navigation" className="mt-6 nav__wrapper">
              <ul className="-my-2 divide-y divide-zinc-100 dark:divide-[var(--themeColor)] text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/exercises">Exercises</MobileNavItem>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/diets">Diets</MobileNavItem> 
                <MobileNavItem href="/programs">Programs</MobileNavItem>
                
                {/* <MobileNavItem href="/fitness">Fitness</MobileNavItem> */}
               
                <MobileNavItem href="/contact">Contact</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li className={clsx( isActive && 'btn--yellow', 'nav-item-box  bg-[#ffe2b5]')}>
      <Link
        href={href}
        className={clsx(
          'nav-item relative block px-6 text-black transition dark:text-white !py-4',
          isActive ? '!text-black dark:hover:bg-[#ffe2b5]' : 'hover:text-gray-400 '
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-1 bg-gradient-to-r from-teal-500 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props} id="SITE_HEADER" className={clsx(props.navButtonPossition)}>
      <ul className="flex rounded-sm text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-400/5 backdrop-blur  
      hover:shadow-zinc-900/5 dark:text-zinc-200 dark:ring-white/10  justify-center text-center content-center">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/exercises">Exercises</NavItem> 
          <NavItem href="/about">About</NavItem>
        <NavItem href="/therappies">Therapies</NavItem>   
          <NavItem href="/contact">Contact</NavItem>
        {/* <NavItem href="/fitness">Fitness</NavItem> */}
        {/* <NavItem href="/meditation">Meditation</NavItem> */}
   
        {/* <NavItem href="/prices">Prices</NavItem> */}
        <NavItem href="/learn">Learn</NavItem>
     
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <div
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full px-0.5 py-0 backdrop-blur transition 
     "
      onClick={toggleMode}
    >
      {/* <ToggleICon /> */}
    </div>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, homePage, ...props }) {
  return (
    <div
      className={clsx(
        className,
        !homePage ? 'h-10 w-10 ' : 'h-[6.5rem] w-[6.5rem] ',
        'rounded-full p-0.5 '
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, homePage, ...props }) {
  return (
    <>
      <div
        aria-label="Home"
        className={clsx(
          className,
          'group pointer-events-auto mt-6 flex  hover:animate-bounce  sm:mt-0'
        )}
        {...props}
      >
        <Image
          id="AVATAR-LG"
          src={'/logo.jpeg'}
          alt=""
          height={58}
          width={58}
          sizes={large ? '20rem' : '10.25rem'}
          className={clsx(
            !homePage ? 'h-20 w-20' : 'h-18 w-18',
            'rounded-full  object-cover',
            `${showOnlyAt500Px}`,
            large ? 'sm:h-16 sm:w-16' : 'h-22 w-22'
          )}
          priority
          as="image"
          // placeholder="blur"
          blurDataURL={'/logo.jpeg'}
        />
        <Image
          id="AVATAR-MOBILE"
          src={'/logo.jpeg'}
          alt=""
          height={19}
          width={19}
          sizes={large ? '6rem' : '4.25rem'}
          className={clsx(
            !homePage ? 'w-17 h-17' : 'h-[5.7rem] w-[5.5rem] ',
            '-mt-8 rounded-full  bg-transparent object-cover',
            `${HideAt500Px}`
          )}
          placeholder="/logo.jpeg'"
          blurDataURL={'/logo.jpeg'}
          priority
        />

        {!homePage && (
          <div
            href="/"
            id="DIRECTOR CREDENTIALS_MOBILE"
            className={clsx(
              transparent,
              'sm:text-5x flex-block -mt-9 flex min-w-[20px] flex-nowrap text-2xl uppercase font-bold tracking-tight  text-zinc-800 dark:text-zinc-100'
            )}
          >
            <div id="MOBILE-CRED" className="siteTile-SM min-[500px]:hidden">
              <div
                className="siteTitle-SM  -mt-5  px-4 text-slate-800"
                data-shrink-original-size="27"
                style={{ letterSpacing: '0.0740741em' }}
              >
                <h1 id="NAME-SM" className="flex text-left dark:text-slate-50">
                  Freevolve
                </h1>
                <br />
                <h1 id="NAME-SM" className="flex text-left dark:text-slate-50">
                  Health
                </h1>
              </div>
              <div
                id="director-position-mobile"
                className="logo-subtitle-SM -mt-1 w-64 sm:w-full"
              >
                <h2 className=" dark:text-slate-200/70">
                  Director, Cinematographer
                </h2>

                <h2 className="-mt-5  text-left text-base text-slate-500 dark:text-slate-200/70">
                  &amp; Visual Media Artist{' '}
                </h2>
              </div>
            </div>{' '}
            <DesktopTitle />
          </div>
        )}
      </div>
      {/* <div id="header-social-media" className="-ml-4 -mt-6">
        <SocialMedia
          className={'mx-4 flex gap-y-4 gap-x-2 sm:-mt-6 sm:mb-10'}
          iconStyle=""
        />
      </div> */}
    </>
  )
}
const showOnlyAt500Px = 'max-[500px]:hidden'
const HideAt500Px = 'min-[500px]:hidden'
const DesktopTitle = () => {
  return (
    <div
      href="/"
      id="DIRECTOR_NAME_DESKTOP"
      className="inline=-flextext-2xl uppercase mt-10 flex font-bold text-zinc-800 dark:text-zinc-100 max-[500px]:hidden md:mt-20"
    >
      <div
        data-content-field="DESTKOOP TYITLE"
        className="director-title-Desktop  mt-6  px-4 text-slate-800"
      >
        <h1
          id="NAME-DESKTOP"
          className="flex min-w-[250px] text-left dark:text-slate-50"
        >
          Freevolve Health
        </h1>

        <div id="DESCKTOP CREDENTIALS" className="site-title mt-0">
          <h2 class="logo-subtitle -mt-4 lg:-mt-2">
            Director, Cinematographer
          </h2>
          <h2 class="logo-subtitle -mt-3">&amp; Visual Media Artist</h2>
        </div>

        <div id="desktop-cred" className="-ml-8 sm:mt-6">
          <SocialMedia className={'flex gap-x-2 gap-y-4'} iconStyle="" />
        </div>
      </div>
      <Link
        href="/"
        // to={homePage}
        aria-label="Home"
        className={clsx(
          // className,
          'mt-6 hidden hover:flex group-hover:relative'
        )}
      >
        <p className="text-md mx-4 mt-2 rounded-lg bg-slate-200 px-8 py-2 leading-6 text-slate-700 dark:text-gray-700 sm:px-0">
          Go to home page ? .
        </p>
      </Link>
    </div>
  )
}
export function Header() {
 const [navButtonPossition, setNavButtonPossition] = useState('')
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
              setNavButtonPossition('!py-0  -ml-4 !mt-[-1.3rem]')
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {  
        setNavButtonPossition('mt-[0.04em] -mr-0')

        removeProperty('--header-inner-position')
        setProperty('--header-top', '41px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        console.log('IS-HOMEPAGE0???', isHomePage)
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      // updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
  
        <div
          ref={headerRef}
          className="top-0 z-10 h-16  bg-black dark:border-b dark:border-[var(--themeColor)]"
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] !px-0 "
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative gap-4">
              <div className="flex flex-1">
                {/* {!isHomePage && (
                  <AvatarContainer homePage={!isHomePage}>
                    <Avatar homePage={!isHomePage} />
                  </AvatarContainer>
                )} */}
              </div>
              <div className="sm:!hiiden flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:!hidden" navButtonPossition={navButtonPossition}/>
                {/* <DesktopNavigation className="!hidden sm:flex pointer-events-auto hidden md:block" navButtonPossition={navButtonPossition}/> */}
              </div>
              <div className="!hidden sm:!flex flex-1 justify-end md:justify-center ">
                {/* <MobileNavigation className="pointer-events-auto md:!hidden" navButtonPossition={navButtonPossition}/> */}
                <DesktopNavigation className="!hidden sm:flex pointer-events-auto hidden md:block" navButtonPossition={navButtonPossition}/>
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}

const Bars = ({navButtonPossition}) => {
  return (
    // <svg width="44" height="44" className={clsx(`${navButtonPossition} h-8 w-8 py-4 -mr-10`)}>
    //   <path
    //     d="M5 6h14M5 12h14M5 18h14"
    //     fill="none"
    //     stroke="white"
    //     stroke-width="2"
    //     stroke-linecap="round"
    //   ></path>
    // </svg>
    <div className={clsx(`${navButtonPossition} P4my70`)}>
      <div class="baZw44 PztR8I"><span class="T8_LA1 HZW1lN"></span><span class="T8_LA1 dbDvn7"></span><span class="T8_LA1 iu4m2t"></span></div>
    </div>
    
  )
}
