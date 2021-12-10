import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`

export const SignInTitle = styled.h2`
  margin: 1rem 0;
`

export const ButtonsBarContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 4rem;

  ${mq('s')} {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

export const LoaderContainer = styled.div`
  width: 38rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
