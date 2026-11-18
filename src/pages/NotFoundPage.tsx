import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-20 text-center">
      <p className="text-sm font-semibold tracking-widest text-emerald-800 uppercase">
        404
      </p>
      <h1 className="font-serif text-3xl font-semibold lg:text-4xl">
        Страницата не е намерена
      </h1>
      <p className="text-stone-600">
        Адресът е грешен или страницата вече не съществува.
      </p>
      <Link
        to="/menu"
        className="mt-2 inline-flex h-11 items-center rounded-xl bg-emerald-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Към менюто
      </Link>
    </main>
  )
}

export default NotFoundPage
