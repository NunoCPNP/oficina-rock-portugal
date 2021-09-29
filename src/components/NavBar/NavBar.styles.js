import styled from '@emotion/styled'
import mq from '@/styles/mediaQueries'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0 3rem 0 3rem;

  ${mq('s')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${mq('s')} {
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

  ${mq('s')} {
    justify-self: center;

    ul {
      padding-left: 0;
    }
  }
`
