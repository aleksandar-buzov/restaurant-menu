import { useTranslation } from "react-i18next"

const AdminCategoriesPage = () => {
  const { t } = useTranslation()

  return (
    <h1 className="font-serif text-2xl font-semibold lg:text-3xl">
      {t("admin.categories")}
    </h1>
  )
}

export default AdminCategoriesPage
