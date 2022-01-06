import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 4rem;
  background-color: var(--ghostWhite);
  padding: 0.6rem;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.1);

  ${mq('s')} {
    margin: 2rem;
  }

  span {
    text-decoration: underline;
  }

  h4 {
    text-align: center;
    text-transform: uppercase;
    color: var(--darkLiver);
  }
`
