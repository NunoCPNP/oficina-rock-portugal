import styled from "@emotion/styled";

export const Container = styled.section`
  margin: 4rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  grid-gap: 4rem;
`

export const Empty = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / 5;
`