import { render } from '@testing-library/react'

import BottomNavBar from '../BottomNavBar'

jest.mock('@/hooks/useAuth', () => {
  return jest.fn(() => ({
    user: false,
  }))
})

describe('<BottomNavBar /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<BottomNavBar />)

    expect(container).toMatchSnapshot()
  })

  it('Should render translations keys', () => {
    const { getByText } = render(<BottomNavBar />)

    expect(getByText('common:men')).toBeInTheDocument()
    expect(getByText('common:women')).toBeInTheDocument()
  })

  it('Should render LanguageSelector Component', () => {
    const { queryAllByTestId } = render(<BottomNavBar />)

    expect(queryAllByTestId(/languageselector/i)).toHaveLength(1)
  })
})
