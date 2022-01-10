import { render } from '@testing-library/react'

import Copyright from '../Copyright'

describe('<Copyright /> spec', () => {
  it('Should match spashot', () => {
    const { container } = render(<Copyright />)

    expect(container).toMatchSnapshot()
  })

  it('Should render translations keys', () => {
    const { getByText } = render(<Copyright />)

    expect(getByText('common:copyright')).toBeInTheDocument()
  })
})
