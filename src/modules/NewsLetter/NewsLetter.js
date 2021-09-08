import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'

import { Container, InputContainer, MessageContainer } from './NewsLetter.styles'

const NewsLetter = ({ message = '' }) => {
  const [email, setEmail] = useState('')
  const { t } = useTranslation('common')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      fetch('/api/mail', {
        method: 'post',
        body: email,
      })
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <MessageContainer>
        <h4>{message}</h4>
      </MessageContainer>
      <Container onSubmit={handleSubmit}>
        <InputContainer>
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={t(`email`)}
          />
        </InputContainer>
        <CustomButton type="submit">{t(`subscribe`)}</CustomButton>
      </Container>
    </>
  )
}

export default NewsLetter
