import { useState } from 'react'
import Router from 'next/router'

import FormInput from '@/components/FormInput'
import CustomButton from '@/components/CustomButton'
import Loader from '@/components/Loader'

import { auth, createUserProfileDocument } from '@/services/firebase'

import { SignUpContainer, SignUpTitle, LoaderContainer } from './SignUp.styles'

const SignUp = () => {
  const [loading, setLoading] = useState(false)

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")

      return
    }

    setLoading(true)

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      const response = await createUserProfileDocument(user, { displayName })

      console.log(response)

      setUserCredentials({
        displayName: '',
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
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
