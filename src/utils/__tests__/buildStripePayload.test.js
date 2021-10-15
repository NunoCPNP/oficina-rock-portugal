import { buildStripePayload } from '../buildStripePayload'

describe('buildStripePayload() spec', () => {
  it('Should return an [] if [] is provided', () => {
    const request = JSON.stringify([])

    const payload = buildStripePayload(request)

    expect(payload).toStrictEqual([])
  })
})
