import { render, cleanup } from '@testing-library/react'

import Footer from '../Footer'

afterEach(cleanup)

describe('<Footer /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<Footer />)

    const header = queryAllByTestId(/footer/i)
    expect(header).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<Footer />)

    expect(asFragment(<Footer />)).toMatchSnapshot()
  })
})