import { render } from '@testing-library/react'

import AccountDetails from '../AccountDetails'

jest.mock('@/hooks/useAuth', () => {
  return jest.fn(() => ({
    user: {
      displayName: 'Semple User',
      deliveryAddress: {
        city: 'Porto',
        country: 'Portugal',
        postalCode: '1234-555',
        street: 'Sample Street',
      },
      deliverySameAsBilling: true,
      email: 'sample@sample.com',
      phoneNumber: '112223344',
    },
  }))
})

describe('<AccountDetails />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<AccountDetails />)

    expect(container).toMatchSnapshot()
  })
})
