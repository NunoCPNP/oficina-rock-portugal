import styled from '@emotion/styled'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import FormCheckBox from '@/components/FormCheckBox'
import FormInput from '@/components/FormInput'
import NoUser from '@/components/NoUser'
import SEO from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

import { firestore } from '@/services/firebase'

import useAuth from '@/hooks/useAuth'

import mq from '@/styles/mediaQueries'

const AccountContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  ${mq('m')} {
    grid-template-columns: 1fr;
  }
`

const ButtonContainer = styled.div`
  margin: 4rem;
  display: flex;
  justify-content: center;

  button:last-child {
    margin-left: 2rem;
  }

  ${mq('m')} {
    flex-direction: column;
    gap: 1rem;

    button:last-child {
      margin-left: 0;
    }
  }
`

const Wrapper = styled.div`
  padding: 0 1rem;
`

const Account = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { user, setUser } = useAuth()

  const updateSuccess = t(`update-success`)
  const updateError = t(`update-error`)

  console.log(user)

  return (
    <>
      <SEO title="Oficina Rock Portugal" />
      <SectionTitle title={t(`account-settings`)} offset="4rem" />
      {user ? (
        <>
          <AccountContainer>
            <Wrapper>
              <SectionTitle title={t(`personal-details`)} sub />
              <FormInput
                name="name"
                type="text"
                value={user.displayName || ''}
                label={t(`name`)}
                onChange={(e) =>
                  setUser({
                    ...user,
                    displayName: e.target.value,
                  })
                }
              />
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
                label={t(`phone-number`)}
              />
            </Wrapper>
            <Wrapper>
              <div>
                <SectionTitle title={t(`delivery-address`)} sub />
                <FormInput
                  name="street"
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
                  label={t(`street`)}
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
                  label={t(`postal-code`)}
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
                  label={t(`city`)}
                />
                <FormInput
                  readOnly
                  name="country"
                  type="text"
                  value="Portugal"
                  // value={user.deliveryAddress.country}
                  // onChange={(e) => {
                  //   setUser({
                  //     ...user,
                  //     deliveryAddress: {
                  //       ...user.deliveryAddress,
                  //       country: e.target.value,
                  //     },
                  //   })
                  // }}
                  label={t(`country`)}
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
                label={t(`same-address`)}
              />
              {!user.deliverySameAsBilling && (
                <>
                  <SectionTitle title={t(`billing-address`)} sub />
                  <FormInput
                    name="steet"
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
                    label={t(`street`)}
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
                    label={t(`postal-code`)}
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
                    label={t(`postal-code`)}
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
                    label={t(`country`)}
                  />
                </>
              )}
            </Wrapper>
          </AccountContainer>
          <ButtonContainer>
            <CustomButton onClick={() => router.push('/')} inverted>
              {t(`go-back`)}
            </CustomButton>
            <CustomButton
              onClick={async () => {
                const userRef = firestore.doc(`users/${user.uid}`)

                try {
                  await userRef.set({
                    ...user,
                  })

                  toast.success(updateSuccess)
                  router.push('/')
                } catch (error) {
                  toast.error(updateError)
                  console.log('Error updating user: ', error.message)
                }
              }}
            >
              {t(`update-info`)}
            </CustomButton>
          </ButtonContainer>
        </>
      ) : (
        <NoUser context="account" />
      )}
    </>
  )
}

export default Account
