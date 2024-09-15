import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-4  sm:mt-32">
      <header className="max-w-2xl">
        <h1 class="pb-4 text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Therapy
        </h1>
        <h1 class="text-center text-2xl font-bold tracking-tight text-slate-700 dark:text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <h1 className="h1 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"></h1>
        <p className="mt-6 px-4 text-lg text-base text-slate-600 text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
