import styled from '@emotion/styled'
import mq from '@/styles/mediaQueries'

export const Container = styled.div`
  margin: 4rem;
  border: 1px solid var(--darkLiver);
  padding: 2rem;
  text-align: center;

  ${mq('s')} {
    margin: 2rem;
  }
`
