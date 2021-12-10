import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  ${mq('s')} {
    margin: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Container = styled.div``
