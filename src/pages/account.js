import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'

import SEO from '@/components/SEO'
import FormInput from '@/components/FormInput'

import useAuth from '@/hooks/useAuth'

const Account = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  console.log(user)

  return (
    user && (
      <AccountContainer>
        <div>
          <SEO title="Oficina Rock PT" description="" />
          <FormInput disabled name="name" type="name" value={user.displayName} handleChange={() => null} label="name" />
          <FormInput disabled name="email" type="email" value={user.email} handleChange={() => null} label="email" />
        </div>
        <div></div>
      </AccountContainer>
    )
  )
}

const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

export default Account
