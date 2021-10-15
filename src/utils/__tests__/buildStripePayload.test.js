import { buildStripePayload } from '../buildStripePayload'

describe('buildStripePayload() spec', () => {
  it('Should return an [] if [] is provided', () => {
    const request = JSON.stringify([])

    const payload = buildStripePayload(request)

    expect(payload).toStrictEqual([])
  })

  it('Should return the correct payload for stripe', () => {
    const request = JSON.stringify([
      {
        uid: 'CA117',
        type: 'T-Shirt',
        band: 'The Offspring',
        title: 'Let the Bad Times Roll',
        image: '/tshirt/ca117_front.jpg',
        size: 'M',
        price: 25,
        quantityAvailable: 1,
        quantitySelected: 1,
      },
    ])

    const payload = buildStripePayload(request)

    expect(payload).toStrictEqual([
      {
        price_data: {
          currency: 'EUR',
          unit_amount: 2500,
          product_data: {
            name: 'The Offspring Let the Bad Times Roll',
            description: 'T-Shirt size M',
          },
        },
        quantity: 1,
      },
    ])
  })
})
