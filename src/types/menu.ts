export interface Allergen {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
  position: number
}

export interface MenuItem {
  id: number
  name: string
  description: string
  priceCents: number
  imageUrl: string | null
  isAvailable: boolean
  isVegetarian: boolean
  categoryId: number
  allergenIds: number[]
}
