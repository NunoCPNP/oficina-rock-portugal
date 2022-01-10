import { render } from '@testing-library/react'

import CartIcon from '../CartIcon'

import { useProductState } from '@/hooks/useProduct'

jest.mock('@/hooks/useProduct')

useProductState.mockReturnValue({
  shoppingBag: ['item1', 'item2'],
})

describe('<CartIcon /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CartIcon />)

    expect(container).toMatchSnapshot()
  })

  it('Should render cart svg', () => {
    const { queryAllByTestId } = render(<CartIcon />)

    expect(queryAllByTestId(/cart-icon/i)).toHaveLength(1)
  })

  it('Should display correct item number', () => {
    const { getByText } = render(<CartIcon />)

    expect(getByText(2)).toBeInTheDocument()
  })
})
