import { useEffect } from 'react'
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
  const { user, setUser } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SectionTitle title={t(`account-settings`)} offset="4rem" />
      {user && (
        <AccountContainer>
          <div>
            <SectionTitle title="Dados Pessoais" sub />
            <FormInput disabled name="name" type="text" value={user.displayName} label={t(`name`)} />
            <FormInput disabled name="email" type="email" value={user.email} label={t(`email`)} />
            <FormInput
              name="phone"
              type="tel"
              value={user.phoneNumber}
              onChange={(e) =>
                setUser({
                  ...user,
                  phoneNumber: e.target.value,
                })
              }
              label="Phone Number"
            />
          </div>
          <div>
            <div>
              <SectionTitle title="Morada de Envio" sub />
              <FormInput
                name="rua"
                type="text"
                value={user.deliveryAddress.street}
                onChange={(e) =>
                  setUser({
                    ...user,
                    deliveryAddress: {
                      ...user.deliveryAddress,
                      street: e.target.value,
                    },
                  })
                }
                label="Rua"
              />
              <FormInput
                name="postalCode"
                type="text"
                value={user.deliveryAddress.postalCode}
                onChange={(e) =>
                  setUser({
                    ...user,
                    deliveryAddress: {
                      ...user.deliveryAddress,
                      postalCode: e.target.value,
                    },
                  })
                }
                label="Código Postal"
              />
              <FormInput
                name="city"
                type="text"
                value={user.deliveryAddress.city}
                onChange={(e) => {
                  setUser({
                    ...user,
                    deliveryAddress: {
                      ...user.deliveryAddress,
                      city: e.target.value,
                    },
                  })
                }}
                label="Cidade"
              />
              <FormInput
                name="country"
                type="text"
                value={user.deliveryAddress.country}
                onChange={(e) => {
                  setUser({
                    ...user,
                    deliveryAddress: {
                      ...user.deliveryAddress,
                      country: e.target.value,
                    },
                  })
                }}
                label="Pais"
              />
            </div>
            <FormCheckBox
              name="sameaddress"
              type="checkbox"
              checked={user.deliverySameAsBilling}
              onChange={() =>
                setUser({
                  ...user,
                  deliverySameAsBilling: !user.deliverySameAsBilling,
                })
              }
              label="Mesma morada para Envio e Facturação"
            />
            {!user.deliverySameAsBilling && (
              <>
                <SectionTitle title="Morada de Facturação" sub />
                <FormInput
                  name="rua"
                  type="text"
                  value={user.billingAddress.street}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      billingAddress: {
                        ...user.billingAddress,
                        street: e.target.value,
                      },
                    })
                  }}
                  label="Rua"
                />
                <FormInput
                  name="postalCode"
                  type="text"
                  value={user.billingAddress.postalCode}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      billingAddress: {
                        ...user.billingAddress,
                        postalCode: e.target.value,
                      },
                    })
                  }}
                  label="Código Postal"
                />
                <FormInput
                  name="city"
                  type="text"
                  value={user.billingAddress.city}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      billingAddress: {
                        ...user.billingAddress,
                        city: e.target.value,
                      },
                    })
                  }}
                  label="Cidade"
                />
                <FormInput
                  name="country"
                  type="text"
                  value={user.billingAddress.country}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      billingAddress: {
                        ...user.billingAddress,
                        country: e.target.value,
                      },
                    })
                  }}
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
