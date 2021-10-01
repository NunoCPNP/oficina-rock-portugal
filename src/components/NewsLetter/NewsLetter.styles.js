import styled from '@emotion/styled'
import mq from '@/styles/mediaQueries'

export const Container = styled.div``

export const MessageContainer = styled.div`
  margin: 0 auto;
  max-width: 50rem;

  h4 {
    text-align: center;
    text-transform: uppercase;
    line-height: 2.5rem;
  }
`

export const FormContainer = styled.form`
  justify-content: center;
  display: flex;
  align-items: center;

  ${mq('s')} {
    flex-direction: column;
  }
`

export const InputContainer = styled.div`
  width: 40rem;
  margin-right: 5rem;

  ${mq('s')} {
    width: 90%;
    margin-right: 0;
  }
`
