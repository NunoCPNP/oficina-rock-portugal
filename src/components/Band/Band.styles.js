import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 6rem;
  padding: 2rem 0;
  border-top: 1px solid var(--ghostWhite);
  border-bottom: 1px solid var(--ghostWhite);

  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4rem;

  img {
    border-radius: 0.5rem;
  }
`

export const ImageContainer = styled.div`
  padding-bottom: 2rem;
`

export const InfoContainer = styled.div``

export const TextContainer = styled.div`
  div {
    padding-bottom: 1.5rem;
  }
`
