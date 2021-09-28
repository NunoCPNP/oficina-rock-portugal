import { render, screen } from '@testing-library/react'

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

  it('Should render all React-Icons svg', () => {
    const { queryAllByTestId } = render(<Footer />)

    expect(queryAllByTestId(/react-icon/i)).toHaveLength(6)
  })

  it('Should render Payment Options image', () => {
    render(<Footer />)

    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('Should render Copyright Component', () => {
    const { queryAllByTestId } = render(<Footer />)

    expect(queryAllByTestId(/copyright/i)).toHaveLength(1)
  })
})
