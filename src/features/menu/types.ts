export interface MenuFilterState {
  vegetarian: boolean
  glutenFree: boolean
}

export const DEFAULT_FILTERS: MenuFilterState = {
  vegetarian: false,
  glutenFree: false,
}
