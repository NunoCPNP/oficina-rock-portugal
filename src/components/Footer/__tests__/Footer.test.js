import { render } from '@testing-library/react'

import Footer from '../Footer'

describe('<Footer /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render with correct styling', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toHaveStyle(`
      background-color: var(--ghostWhite);
    `)
  })

  it('Should render translations keys', () => {
    const { getByText } = render(<Footer />)

    expect(getByText('common:who-we-are')).toBeInTheDocument()
    expect(getByText('common:privacy-policies')).toBeInTheDocument()
    expect(getByText('common:shipping-and-exchanges')).toBeInTheDocument()
    expect(getByText('common:faq')).toBeInTheDocument()
    expect(getByText('common:contacts')).toBeInTheDocument()
    expect(getByText('common:payment-methods')).toBeInTheDocument()
    expect(getByText('common:newsletter')).toBeInTheDocument()
  })

  it('Should render all React-Icons svg', () => {
    const { queryAllByTestId } = render(<Footer />)

    expect(queryAllByTestId(/react-icon/i)).toHaveLength(6)
  })

  it('Should render Payment Options image', () => {
    const { getAllByRole } = render(<Footer />)

    expect(getAllByRole('img')).toHaveLength(2)
  })

  it('Should render Copyright Component', () => {
    const { queryAllByTestId } = render(<Footer />)

    expect(queryAllByTestId(/copyright/i)).toHaveLength(1)
  })
})
