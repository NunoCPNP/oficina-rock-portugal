import { render } from '@testing-library/react'

import TopBanner from '../TopBanner'

const mockContext = jest.fn()

jest.mock('@/hooks/useSettings', () => ({
  ...jest.requireActual('@/hooks/useSettings'),
  useSettingsState: () => mockContext(),
}))

describe('<TopBanner /> spec', () => {
  it('Should match snapshot', () => {
    mockContext.mockReturnValueOnce({ topBanner: true })

    const { container } = render(<TopBanner />)

    expect(container).toMatchSnapshot()
  })

  it('Should render translation keys', () => {
    mockContext.mockReturnValueOnce({ topBanner: true })

    const { getByText } = render(<TopBanner />)

    expect(getByText('common:free-shipping-banner')).toBeInTheDocument()
  })

  it('Should not render if topBanner is false', () => {
    mockContext.mockReturnValueOnce({ topBanner: false })

    const { container } = render(<TopBanner />)

    expect(container).toMatchSnapshot()
  })
})
