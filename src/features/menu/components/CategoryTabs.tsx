import type { Category } from "@/types/menu"

interface CategoryTabsProps {
  categories: Category[]
}

const CategoryTabs = ({ categories }: CategoryTabsProps) => {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-5 lg:px-6 lg:pt-8">
      <nav aria-label="Категории">
        <ul className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            return (
              <li key={category.id} className="shrink-0">
                <a
                  className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-stone-700 transition-colors hover:border-emerald-700 hover:text-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none"
                  href={`#category-${category.id}`}
                >
                  {category.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default CategoryTabs
