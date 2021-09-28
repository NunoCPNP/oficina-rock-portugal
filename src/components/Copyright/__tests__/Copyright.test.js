import { render } from '@testing-library/react'

import Copyright from '../Copyright'

describe('<Copyright /> spec', () => {
  it('Should match spashot', () => {
    const { container } = render(<Copyright />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render with correct styling', () => {
    const { container } = render(<Copyright />)

    expect(container.firstChild).toHaveStyle(`
      display: flex;
      justify-content: center;
      padding-bottom: 2rem;
    `)
  })

  it('Should render translations keys', () => {
    const { getByText } = render(<Copyright />)

    expect(getByText('common:copyright')).toBeInTheDocument()
  })
})
