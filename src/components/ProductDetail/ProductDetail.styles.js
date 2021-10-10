import styled from '@emotion/styled'

export const Container = styled.section`
  margin: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  grid-gap: 4rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`

export const SizeGuide = styled.div`
  display: flex;
  margin: 4rem 0;
`
