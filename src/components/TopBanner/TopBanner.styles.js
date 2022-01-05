import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 4rem;
  background-color: var(--darkLiver);
  padding: 0.6rem;
  border-radius: 0.8rem;

  ${mq('s')} {
    margin: 2rem;
  }

  span {
    text-decoration: underline;
  }

  h4 {
    text-align: center;
    text-transform: uppercase;
    color: var(--snow);
  }
`
