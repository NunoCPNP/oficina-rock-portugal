import mq from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: var(--headerLevel);
`

export const StyledNav = styled.nav`
  background: var(--darkLiver);
  color: var(--snow);
  padding: 1.8rem 1rem;

  ${mq('s')} {
    padding: 1rem;
  }
`
