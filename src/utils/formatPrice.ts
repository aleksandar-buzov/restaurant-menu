const priceFormatter = new Intl.NumberFormat("bg-BG", {
  style: "currency",
  currency: "EUR",
})

const formatPrice = (priceCents: number): string =>
  priceFormatter.format(priceCents / 100)

export default formatPrice
