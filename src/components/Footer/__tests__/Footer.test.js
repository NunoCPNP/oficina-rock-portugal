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

  it('Should render Copyright Component', () => {
    const { queryAllByTestId } = render(<Footer />)

    const copyright = queryAllByTestId(/copyright/i)
    expect(copyright).toHaveLength(1)
  })
})
