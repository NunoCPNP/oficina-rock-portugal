import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.div`
  text-transform: uppercase;
  width: 100%;
`

export const Title = styled.h3`
  padding-bottom: 2rem;

  ${mq('s')} {
    text-align: center;
  }
`

export const Measures = styled.div`
  span {
    font-weight: 700;
    padding-right: 2rem;
    font-size: var(--heading-3);
  }

  ${mq('s')} {
    text-align: center;

    span {
      padding: 1rem 0;
    }
  }
`

export const Measure = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-bottom: 0.2rem;

  ${mq('s')} {
    grid-template-columns: 1fr;
  }
`
