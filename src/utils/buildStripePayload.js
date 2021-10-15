export const buildStripePayload = (request) => {
  const parsedRequest = JSON.parse(request)
  const line_items = []

  parsedRequest.forEach((element) => {
    const item = {
      price_data: {
        currency: 'EUR',
        unit_amount: element.price * 100,
        product_data: {
          name: `${element.band} ${element.title}`,
          description: `${element.type} size ${element.size}`,
        },
      },
      quantity: element.quantitySelected,
    }

    line_items.push(item)
  })

  return line_items
}
