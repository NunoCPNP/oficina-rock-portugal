import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.section`
  margin: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  ${mq('m')} {
    margin: 4rem 1rem;
    grid-template-columns: 1fr;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  grid-gap: 4rem;

  ${mq('s')} {
    grid-gap: 1rem;
    flex-direction: column;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`
