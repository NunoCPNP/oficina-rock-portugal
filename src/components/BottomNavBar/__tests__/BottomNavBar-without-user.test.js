import { render } from '@testing-library/react'

import BottomNavBar from '../BottomNavBar'

let mockIsLoggedIn

jest.mock('@/hooks/useAuth', () => {
  return jest.fn(() => ({
    user: mockIsLoggedIn,
  }))
})

describe('<BottomNavBar /> spec', () => {
  mockIsLoggedIn = false

  it('Should match spashot', () => {
    const { container } = render(<BottomNavBar />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render with correct styling', () => {
    const { container } = render(<BottomNavBar />)

    expect(container.firstChild).toHaveStyle(`
      display: flex;
      justify-content: space-between;
      padding: 1rem 4rem;
      background: var(--darkLiver);
      color: var(--snow);
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
    `)
  })

  it('Should render translations keys', () => {
    const { getByText } = render(<BottomNavBar />)

    expect(getByText('common:men')).toBeInTheDocument()
    expect(getByText('common:women')).toBeInTheDocument()
    expect(getByText('common:promotions')).toBeInTheDocument()
  })

  it('Should render LanguageSelector Component', () => {
    const { queryAllByTestId } = render(<BottomNavBar />)

    expect(queryAllByTestId(/languageselector/i)).toHaveLength(1)
  })
})
