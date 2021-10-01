import styled from '@emotion/styled'
import mq from '@/styles/mediaQueries'

export const StyledSection = styled.section`
  margin: 4rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  ${mq('s')} {
    grid-template-columns: 1fr;
  }
`

export const ItemContainer = styled.div`
  position: relative;
  border: 1px solid var(--darkLiver);
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  ${mq('s')} {
    height: 17rem;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: var(--snow);
  text-transform: uppercase;
  background-color: var(--darkLiver);
  padding: 0.3rem 1rem 0.3rem 1rem;
`
