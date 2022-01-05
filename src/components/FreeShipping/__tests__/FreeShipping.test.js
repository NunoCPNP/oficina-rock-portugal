import { render } from '@testing-library/react'

import FreeShipping from '../FreeShipping'

describe('<FreeShipping /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<FreeShipping />)

    expect(container).toMatchSnapshot()
  })

  it('Should render translation keys', () => {
    const { getByText } = render(<FreeShipping />)

    expect(getByText('common:free-shipping')).toBeInTheDocument()
  })
})
