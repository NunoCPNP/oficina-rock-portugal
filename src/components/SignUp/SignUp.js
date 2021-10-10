import Router from 'next/router'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import Loader from '@/components/Loader'

import { auth } from '@/services/firebase'

import { LoaderContainer, SignUpContainer, SignUpTitle } from './SignUp.styles'

const SignUp = () => {
  const { t } = useTranslation('common')
  const [loading, setLoading] = useState(false)

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { email, password, confirmPassword } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")

      return
    }

    setLoading(true)

    try {
      await auth.createUserWithEmailAndPassword(email, password)

      setUserCredentials({
        email: '',
        password: '',
        confirmPassword: '',
      })

      Router.push('/')
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return loading ? (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  ) : (
    <SignUpContainer>
      <SignUpTitle>{t(`sign-up-title`)}</SignUpTitle>
      <span>{t(`sign-up-spam`)}</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={email} onChange={handleChange} label={t(`email`)} required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label={t(`confirm-password`)}
          required
        />
        <CustomButton type="submit">{t(`sign-up-button`)}</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
