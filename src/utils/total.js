export const total = (shoppingBag) => {
  const result = shoppingBag.reduce((accumulator, item) => {
    return accumulator + item.price
  }, 0)

  return result
}
