import styled from '@emotion/styled'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 10rem auto auto auto;
  grid-gap: 2rem;
  align-items: center;
  margin-bottom: 1rem;
`

export const ImageContainer = styled.div`
  img {
    border-radius: 0.5rem;
  }
`

export const DetailsContainer = styled.div`
  span {
    font-size: var(--heading-5);
  }
`
