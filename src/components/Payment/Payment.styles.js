import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 4rem;
  text-align: center;

  div {
    display: flex;
  }

  p {
    text-transform: uppercase;
    margin-bottom: 4rem;
  }
`

export const Form = styled.form`
  input {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 4rem;
`

export const ButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    padding-right: 1rem;
  }
`
