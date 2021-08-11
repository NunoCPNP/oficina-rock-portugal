import styled from "@emotion/styled";

export const StyledSection = styled.section`
  margin: 4rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`

export const ItemContainer = styled.div`
  position: relative;
  border: 1px solid black;
  height: 30rem;
`

export const TextContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`