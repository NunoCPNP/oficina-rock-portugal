import { useEffect } from 'react'
import { useRouter } from 'next/router'

import SEO from '@/components/SEO'

import useAuth from '@/hooks/useAuth'

const Admin = () => {
  const router = useRouter()
  const { user } = useAuth()

  console.log(user)

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user])

  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <div>My Account</div>
    </>
  )
}

export default Admin
