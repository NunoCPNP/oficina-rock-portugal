import styled from '@emotion/styled'

import SEO from '@/components/SEO'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

const Login = () => {
  return (
    <>
      <SEO title="Oficina Rock PT" description="" />
      <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
      </SignInAndSignUpContainer>
    </>
  )
}

const SignInAndSignUpContainer = styled.div`
  width: 85rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
`

export default Login
