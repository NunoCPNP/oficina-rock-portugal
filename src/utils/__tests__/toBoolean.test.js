import { toBoolean } from '../toBoolean'

describe('toBoolean() spec', () => {
  it('Should return true if "true" is provided', () => {
    const response = toBoolean('true')

    expect(response).toBeTruthy()
  })

  it('Should return false if "false" is provided', () => {
    const response = toBoolean('false')

    expect(response).toBeFalsy()
  })

  it('Should return true if true is provided', () => {
    const response = toBoolean(true)

    expect(response).toBeTruthy()
  })

  it('Should return false if false is provided', () => {
    const response = toBoolean(false)

    expect(response).toBeFalsy()
  })
})
