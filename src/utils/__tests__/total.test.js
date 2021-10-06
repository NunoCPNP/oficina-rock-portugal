import { total } from '../total'

describe('total() spec', () => {
  it('Should return 0 if empty array is provided', () => {
    const shoppingBag = []

    const response = total(shoppingBag)

    expect(response).toBe(0)
  })

  it('Should return the value of the item if only 1 item is provided', () => {
    const shoppingBag = [{ id: 1, price: 20 }]

    const response = total(shoppingBag)

    expect(response).toBe(20)
  })

  it('Should summ the prices of all the elements in the array', () => {
    const shoppingBag = [
      { id: 1, price: 20 },
      { id: 2, price: 15 },
      { id: 3, price: 25 },
    ]

    const response = total(shoppingBag)

    expect(response).toBe(60)
  })
})
