import Link from 'next/link'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import { Container, Header, Warnings } from './CheckOutWarnings.styles'

const CheckOutWarnings = ({ user }) => {
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
    </Container>
  )
}

export default CheckOutWarnings
