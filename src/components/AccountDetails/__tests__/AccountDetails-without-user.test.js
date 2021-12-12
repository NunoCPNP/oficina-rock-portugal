import { render } from '@testing-library/react'

import AccountDetails from '../AccountDetails'

jest.mock('@/hooks/useAuth', () => {
  return jest.fn(() => ({
    user: false,
  }))
})

describe('<AccountDetails />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<AccountDetails />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
