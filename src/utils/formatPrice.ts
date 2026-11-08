const formatPrice = (priceCents: number): string => {
  const price = Intl.NumberFormat("bg-BG", {
    style: "currency",
    currency: "EUR",
  }).format(priceCents / 100)

  return price
}

export default formatPrice
