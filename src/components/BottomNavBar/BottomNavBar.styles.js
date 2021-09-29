import styled from '@emotion/styled'

export const StyledNavigation = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem 4rem;
  background: var(--darkLiver);
  color: var(--snow);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const UserName = styled.div`
  @media only screen and (max-width: 480px) {
    justify-self: center;
    padding-bottom: 1rem;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  ul {
    display: inherit;
    margin: 0;
  }

  li {
    list-style: none;

    &:not(:last-child) {
      padding-right: 1.5rem;
    }

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        border-bottom: 1px solid var(--snow);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    justify-self: center;

    ul {
      padding-left: 0;
    }
  }
`
