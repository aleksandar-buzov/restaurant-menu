import { useTranslation } from "react-i18next"

const AdminItemsPage = () => {
  const { t } = useTranslation()

  return (
    <h1 className="font-serif text-2xl font-semibold lg:text-3xl">
      {t("admin.items")}
    </h1>
  )
}

export default AdminItemsPage
