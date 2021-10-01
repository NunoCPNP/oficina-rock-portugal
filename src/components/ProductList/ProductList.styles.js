import styled from '@emotion/styled'

export const Container = styled.section`
  margin: 4rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 4rem;
`

export const Empty = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / 5;
`
