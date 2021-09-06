import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import FormInput from '@/components/FormInput'
import SectionTitle from '@/components/SectionTitle'
import FormCheckBox from '@/components/FormCheckBox'

import useAuth from '@/hooks/useAuth'

const Account = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { user } = useAuth()

  const [state, setState] = useState({
    phoneNumber: '',
    deliveryAddress: {
      city: '',
      country: '',
      postalCode: '',
      street: '',
    },
    deliverySameAsBilling: true,
    billingAddress: {
      city: '',
      country: '',
      postalCode: '',
      street: '',
    },
  })

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  console.log(user)

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`account-settings`)} offset="4rem" />
      {user && (
        <AccountContainer>
          <div>
            <div>Dados Pessoais</div>
            <FormInput disabled name="name" type="text" value={user.displayName} label={t(`name`)} />
            <FormInput disabled name="email" type="email" value={user.email} label={t(`email`)} />
          </div>
          <div>
            <div>
              <div>Morada de Envio</div>
              <FormInput name="rua" type="text" value={user.deliveryAddress.street} onChange={() => null} label="Rua" />
              <FormInput
                name="postalCode"
                type="text"
                value={user.deliveryAddress.postalCode}
                onChange={() => null}
                label="Código Postal"
              />
              <FormInput
                name="city"
                type="text"
                value={user.deliveryAddress.city}
                onChange={() => null}
                label="Cidade"
              />
              <FormInput
                name="country"
                type="text"
                value={user.deliveryAddress.country}
                onChange={() => null}
                label="Pais"
              />
            </div>
            <FormCheckBox
              name="sameaddress"
              type="checkbox"
              checked={user.deliverySameAsBilling}
              onChange={() => null}
              label="Mesma morada para Envio e Facturação"
            />
            {!user.deliverySameAsBilling && (
              <>
                <div>Morada de Facturação</div>
                <FormInput
                  name="rua"
                  type="text"
                  value={user.deliveryAddress.street}
                  onChange={() => null}
                  label="Rua"
                />
                <FormInput
                  name="postalCode"
                  type="text"
                  value={user.deliveryAddress.postalCode}
                  onChange={() => null}
                  label="Código Postal"
                />
                <FormInput
                  name="city"
                  type="text"
                  value={user.deliveryAddress.city}
                  onChange={() => null}
                  label="Cidade"
                />
                <FormInput
                  name="country"
                  type="text"
                  value={user.deliveryAddress.country}
                  onChange={() => null}
                  label="Pais"
                />
              </>
            )}
          </div>
        </AccountContainer>
      )}
    </>
  )
}

const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

export default Account
