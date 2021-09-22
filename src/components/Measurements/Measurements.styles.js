import styled from '@emotion/styled'

export const Container = styled.div`
  text-transform: uppercase;
  margin: 4rem;
`

export const Title = styled.h3`
  padding-bottom: 2rem;
`

export const Measures = styled.div`
  span {
    font-weight: 700;
    padding-right: 2rem;
    font-size: var(--heading-3);
  }
`

export const Measure = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-bottom: 0.2rem;
`
