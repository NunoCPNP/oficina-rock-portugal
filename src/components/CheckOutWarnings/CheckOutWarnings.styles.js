import styled from '@emotion/styled'

export const Container = styled.div`
  text-transform: uppercase;
`

export const Header = styled.div`
  font-weight: 700;
  text-align: center;

  a {
    text-decoration: underline;
    color: inherit;
  }
`

export const Warnings = styled.div`
  text-align: center;
  padding-top: 3rem;
  line-height: 2.5rem;
`

export const ButtonContainer = styled.div`
  margin: 4rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;

  button:last-child {
    margin-left: 2rem;
  }
`
