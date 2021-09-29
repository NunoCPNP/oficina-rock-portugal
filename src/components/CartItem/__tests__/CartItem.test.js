import { render } from '@testing-library/react'

import CartItem from '../CartItem'

describe('<CartItem /> spec', () => {
  const props = {
    item: {
      image: '/image.jpg',
      type: 'T-Shirt',
      band: 'Ramones',
      quantitySelected: 2,
      size: 'M',
      price: 20,
    },
  }

  it('Should match snapshot', () => {
    const { container } = render(<CartItem {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render item image', () => {
    const { getAllByRole } = render(<CartItem {...props} />)

    expect(getAllByRole('img')).toHaveLength(1)
  })

  it('Should display correct item information', () => {
    const { getByText } = render(<CartItem {...props} />)

    expect(getByText(props.item.type)).toBeInTheDocument()
    expect(getByText(props.item.band)).toBeInTheDocument()
    expect(getByText(props.item.quantitySelected)).toBeInTheDocument()
    expect(getByText(props.item.size)).toBeInTheDocument()
  })

  it('Should calculate and display price correctly', () => {
    const { getByText } = render(<CartItem {...props} />)

    expect(getByText(`${props.item.quantitySelected * props.item.price} €`)).toBeInTheDocument()
  })
})
