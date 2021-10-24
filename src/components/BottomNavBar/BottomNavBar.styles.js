import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const StyledNavigation = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1.4rem 4rem;
  background: var(--darkLiver);
  color: var(--snow);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);

  ${mq('s')} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: ${({ user }) => (user ? '1rem' : 0)};
  }
`

export const UserName = styled.div`
  ${mq('s')} {
    justify-self: center;
    margin: ${({ user }) => (user ? '0.8rem' : '0')};
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

  ${mq('s')} {
    justify-self: center;
    margin: 0.8rem;

    ul {
      padding-left: 0;
    }
  }
`
