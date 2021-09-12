import { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'

import { Container, InputContainer, MessageContainer } from './NewsLetter.styles'

const NewsLetter = ({ message = '' }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/mail', {
      method: 'post',
      body: email,
    })

    if (response.ok) {
      setEmail('')
      router.push('/')
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
