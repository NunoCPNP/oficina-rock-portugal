import styled from '@emotion/styled'
import mq from '@/styles/mediaQueries'

export const StyledSection = styled.section`
  margin: 4rem;

  ${mq('s')} {
    margin: 2rem;
  }
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
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  ${mq('s')} {
    height: 16rem;
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
