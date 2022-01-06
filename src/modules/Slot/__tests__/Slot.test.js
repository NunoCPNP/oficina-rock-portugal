import { render } from '@testing-library/react'

import Slot from '../Slot'

describe('<Slot /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Slot />)

    expect(container).toMatchSnapshot()
  })
})
