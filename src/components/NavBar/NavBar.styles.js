import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0 3rem 0 3rem;

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`

export const LinkContainer = styled.div`
  justify-self: end;

  ul {
    display: flex;
  }

  li {
    display: inherit;
    align-items: center;
    list-style: none;
  }

  li:not(:last-child) {
    margin-right: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media only screen and (max-width: 480px) {
    justify-self: center;

    ul {
      padding-left: 0;
    }
  }
`
