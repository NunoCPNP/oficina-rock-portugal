import Link from 'next/link'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { Container, Header, Warnings, ButtonContainer } from './CheckOutWarnings.styles'
import CustomButton from '../CustomButton'

const CheckOutWarnings = ({ user }) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <Container>
      <Header>
        <Trans
          i18nKey="common:checkout-warnings"
          components={{
            a: <div />,
            b: <Link href="/account" />,
          }}
        />
      </Header>
      <Warnings>
        {user.phoneNumber === '' && <div>{t(`no-phone`)}</div>}
        {user.deliveryAddress.street === '' && <div>{t(`no-street`)}</div>}
        {user.deliveryAddress.postalCode === '' && <div>{t(`no-postal-code`)}</div>}
        {user.deliveryAddress.city === '' && <div>{t(`no-city`)}</div>}
        {user.deliveryAddress.country === '' && <div>{t(`no-country`)}</div>}
        {user.deliverySameAsBilling === '' && <div>{t(`no-delivery-address`)}</div>}
      </Warnings>
      <ButtonContainer>
        <CustomButton inverted onClick={() => router.push('/')}>
          {t(`go-back`)}
        </CustomButton>
        <CustomButton onClick={() => router.push('/account')}>{t(`go-to-account`)}</CustomButton>
      </ButtonContainer>
    </Container>
  )
}

export default CheckOutWarnings
