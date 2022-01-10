import { render } from '@testing-library/react'

import CheckOutWrapper from '..//CheckOutWrapper'

describe('<CheckOutWrapper /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CheckOutWrapper />)

    expect(container).toMatchSnapshot()
  })
})
