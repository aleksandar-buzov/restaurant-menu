const formatPrice = (priceCents: number, locale: string): string =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(priceCents / 100)

export default formatPrice
