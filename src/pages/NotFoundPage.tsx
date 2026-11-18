import { Link } from "react-router"
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-20 text-center">
      <p className="text-sm font-semibold tracking-widest text-emerald-800 uppercase">
        404
      </p>
      <h1 className="font-serif text-3xl font-semibold lg:text-4xl">
        {t("notFound.title")}
      </h1>
      <p className="text-stone-600">{t("notFound.description")}</p>
      <Link
        to="/menu"
        className="mt-2 inline-flex h-11 items-center rounded-xl bg-emerald-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {t("common.backToMenu")}
      </Link>
    </main>
  )
}

export default NotFoundPage
