import Router from 'next/router'
import toast from 'react-hot-toast'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'

import Loader from '@/components/Loader'

import useAuth from '@/hooks/useAuth'

import { auth } from '@/services/firebase'

import { ButtonsBarContainer, LoaderContainer, SignInContainer, SignInTitle } from './SignIn.styles'

const SignIn = () => {
  const { t } = useTranslation('common')
  const { signinGoogle } = useAuth()
  const [loading, setLoading] = useState(false)

  const success = t(`success-login`)

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    try {
      await auth.signInWithEmailAndPassword(email, password)

      setCredentials({
        email: '',
        password: '',
      })

      toast.success(success)
      Router.push('/')
    } catch (error) {
      toast.error(error.message)
    }

    setLoading(false)
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  return loading ? (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  ) : (
    <SignInContainer>
      <SignInTitle>{t(`sign-in-title`)}</SignInTitle>
      <span>{t(`sign-in-span`)}</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={handleChange} value={email} label={t(`email`)} required />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">{t(`sign-in-button`)}</CustomButton>
          <CustomButton type="button" onClick={() => signinGoogle()} isGoogleSignIn>
            {t(`sign-in-google`)}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
