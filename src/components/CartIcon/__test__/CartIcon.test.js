import { render } from '@testing-library/react'

import CartIcon from '../CartIcon'

import { useProductState } from '@/hooks/useProduct'
jest.mock('@/hooks/useProduct')

useProductState.mockReturnValue({
  shoppingBag: [],
})

describe('<CartIcon /> spec', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CartIcon />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render with correct styling', () => {
    const { container } = render(<CartIcon />)

    expect(container.firstChild).toHaveStyle(`
      width: 2.5rem;
      height: 2.5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `)
  })

  it('Should render cart svg', () => {
    const { queryAllByTestId } = render(<CartIcon />)

    expect(queryAllByTestId(/cart-icon/i)).toHaveLength(1)
  })

  it('Should display correct item number', () => {
    const { getByText } = render(<CartIcon />)

    expect(getByText(0)).toBeInTheDocument()
  })
})
