import { useState } from 'react'
import Router from 'next/router'

import FormInput from '@/components/FormInput'
import CustomButton from '@/components/CustomButton'

import Loader from '@/modules/Loader'

import useAuth from '@/hooks/useAuth'
import useSettings from '@/hooks/useSettings'

import { auth } from '@/services/firebase'

import { ButtonsBarContainer, SignInContainer, SignInTitle, LoaderContainer } from './SignIn.styles'

const SignIn = () => {
  const { signinGoogle } = useAuth()
  const [{ isLoading }, dispatch] = useSettings()

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()

    dispatch({ type: 'TOGGLE_LOADING' })

    try {
      await auth.signInWithEmailAndPassword(email, password)

      setCredentials({
        email: '',
        password: '',
      })

      Router.push('/')
    } catch (error) {
      console.log(error)
    }

    dispatch({ type: 'TOGGLE_LOADING' })
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  return isLoading ? (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  ) : (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={handleChange} value={email} label="email" required />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={() => signinGoogle()} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
