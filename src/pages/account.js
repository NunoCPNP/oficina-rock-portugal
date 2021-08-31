import { useEffect } from 'react'
import { useRouter } from 'next/router'

import SEO from '@/components/SEO'

import useAuth from '@/hooks/useAuth'

const Account = () => {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  return (
    <>
      <SEO title="Oficina Rock PT" description="" />
      <div>My Account</div>
    </>
  )
}

export default Account
