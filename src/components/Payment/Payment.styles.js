import styled from '@emotion/styled'

import CustomButton from '@/components/CustomButton'

export const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
`

export const ButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    padding-right: 1rem;
  }
`

export const StyledCustomButton = styled(CustomButton)`
  width: 100%;
`
