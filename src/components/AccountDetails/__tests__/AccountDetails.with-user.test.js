import { render } from '@testing-library/react'

import AccountDetails from '../AccountDetails'

jest.mock('@/hooks/useAuth', () => {
  return jest.fn(() => ({
    user: {
      displayName: 'Semple User',
      deliveryAddress: {
        city: 'Matosinhos',
        country: 'Portugal',
        postalCode: '4450-120',
        street: 'Av Comendador Ferreira de Matos, 312, 2º Esq',
      },
      deliverySameAsBilling: true,
      displayName: 'Nuno de Carvalho Pinheiro Nunes Pereira',
      email: 'hello@nunopereira.tech',
      phoneNumber: '968143844',
    },
  }))
})

describe('<AccountDetails />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<AccountDetails />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
