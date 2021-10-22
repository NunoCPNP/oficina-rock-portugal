import useAuth from '@/hooks/useAuth'

import { Block, Container, GridContainer, Info, Title } from './AccountDetails.styles'

const AccountDetails = () => {
  const { user } = useAuth()

  if (!user) return null

  return (
    <Container>
      <GridContainer>
        <Block>
          <Title>
            <h2>Dados Pessoais</h2>
          </Title>
          <Info>
            <span>Nome : </span>
            {user.displayName}
          </Info>
          <Info>
            <span>E-Mail : </span>
            {user.email}
          </Info>
          <Info>
            <span>Telefone : </span>
            {user.phoneNumber}
          </Info>
        </Block>
        <Block>
          <Title>
            <h2>Morada de Envio</h2>
          </Title>
          <Info>
            <span>Rua : </span>
            {user.deliveryAddress.street}
          </Info>
          <Info>
            <span>Código Postal : </span>
            {user.deliveryAddress.postalCode}
          </Info>
          <Info>
            <span>Localidade : </span>
            {user.deliveryAddress.city}
          </Info>
          <Info>
            <span>País : </span>
            {user.deliveryAddress.country}
          </Info>
        </Block>
        {!user.deliverySameAsBilling ? (
          <Block>
            <div>Morada de facturação igual à morada de envio</div>
          </Block>
        ) : (
          <Block>
            <Title>
              <h2>Morada de Faturação</h2>
            </Title>
            <Info>
              <span>Rua : </span>
              {user.deliveryAddress.street}
            </Info>
            <Info>
              <span>Código Postal : </span>
              {user.deliveryAddress.postalCode}
            </Info>
            <Info>
              <span>Localidade : </span>
              {user.deliveryAddress.city}
            </Info>
            <Info>
              <span>País : </span>
              {user.deliveryAddress.country}
            </Info>
          </Block>
        )}
      </GridContainer>
    </Container>
  )
}

export default AccountDetails
