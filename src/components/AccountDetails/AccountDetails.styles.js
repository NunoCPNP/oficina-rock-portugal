import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 4rem;

  ${mq('s')} {
    margin: 4rem 1rem;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${mq('s')} {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: var(--heading-3);
  }
`

export const Info = styled.div`
  text-transform: uppercase;
  margin-bottom: 1rem;

  span {
    font-weight: 700;
    padding-right: 0.6rem;
  }
`

export const Block = styled.div`
  padding-bottom: 4rem;
`
