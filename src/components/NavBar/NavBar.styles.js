import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem 0 3rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LinkContainer = styled.div`
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
`
