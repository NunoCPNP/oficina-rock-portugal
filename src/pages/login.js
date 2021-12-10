import styled from '@emotion/styled'

import SEO from '@/components/SEO'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

import mq from '@/styles/mediaQueries'

const SignInAndSignUpContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  ${mq('m')} {
    grid-template-columns: 1fr;
  }
`

const Login = () => {
  return (
    <>
      <SEO title="Oficina Rock Portugal" description="" />
      <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
      </SignInAndSignUpContainer>
    </>
  )
}

export default Login
