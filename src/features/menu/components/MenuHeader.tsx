import { useTranslation } from "react-i18next"

interface MenuHeaderProps {
  onSearchChange: (inputValue: string) => void
  searchField: string
}

const MenuHeader = ({ onSearchChange, searchField }: MenuHeaderProps) => {
  const { t } = useTranslation()

  return (
    <header className="bg-emerald-900 text-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 lg:px-6 lg:py-10">
        <span className="text-xs font-semibold tracking-widest text-emerald-200 uppercase">
          {t("menu.eyebrow")}
        </span>
        <h1 className="font-serif text-3xl leading-tight font-semibold lg:text-5xl">
          {t("common.restaurantName")}
        </h1>
        <p className="text-sm text-emerald-100 lg:text-base">
          {t("menu.subtitle")}
        </p>
        <div className="mt-4 flex h-12 max-w-xl items-center gap-2 rounded-xl bg-white px-4 text-stone-900 focus-within:ring-2 focus-within:ring-emerald-200">
          <label htmlFor="menu-search" className="sr-only">
            {t("menu.searchLabel")}
          </label>
          <input
            id="menu-search"
            onChange={(e) => onSearchChange(e.target.value)}
            value={searchField}
            type="search"
            placeholder={t("menu.searchPlaceholder")}
            className="flex-1 bg-transparent text-base outline-none placeholder:text-stone-500"
          />
        </div>
      </div>
    </header>
  )
}

export default MenuHeader
