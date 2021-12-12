import useAuth from '@/hooks/useAuth'
import useTranslation from 'next-translate/useTranslation'

import { Block, Container, GridContainer, Info, Title } from './AccountDetails.styles'

const AccountDetails = () => {
  const { t } = useTranslation('common')
  const { user } = useAuth()

  if (!user) return null

  return (
    <Container>
      <GridContainer>
        <Block>
          <Title>
            <h2>{t(`personal-details`)}</h2>
          </Title>
          <Info>
            <span>{t(`name`)} : </span>
            {user.displayName}
          </Info>
          <Info>
            <span>{t(`email`)} : </span>
            {user.email}
          </Info>
          <Info>
            <span>{t(`phone-number`)} : </span>
            {user.phoneNumber}
          </Info>
        </Block>
        <Block>
          <Title>
            <h2>{t(`delivery-address`)}</h2>
          </Title>
          <Info>
            <span>{t(`street`)} : </span>
            {user.deliveryAddress.street}
          </Info>
          <Info>
            <span>{t(`postal-code`)} : </span>
            {user.deliveryAddress.postalCode}
          </Info>
          <Info>
            <span>{t(`city`)} : </span>
            {user.deliveryAddress.city}
          </Info>
          <Info>
            <span>{t(`country`)} : </span>
            {user.deliveryAddress.country}
          </Info>
        </Block>
        {user.deliverySameAsBilling ? (
          <Block>
            <div>{t(`same-address`)}</div>
          </Block>
        ) : (
          <Block>
            <Title>
              <h2>{t(`billing-address`)}</h2>
            </Title>
            <Info>
              <span>{t(`street`)} : </span>
              {user.deliveryAddress.street}
            </Info>
            <Info>
              <span>{t(`postal-code`)} : </span>
              {user.deliveryAddress.postalCode}
            </Info>
            <Info>
              <span>{t(`city`)} : </span>
              {user.deliveryAddress.city}
            </Info>
            <Info>
              <span>{t(`country`)} : </span>
              {user.deliveryAddress.country}
            </Info>
          </Block>
        )}
      </GridContainer>
    </Container>
  )
}

export default AccountDetails
