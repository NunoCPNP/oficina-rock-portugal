import styled from '@emotion/styled'
import mq from '@/styles/mediaQueries'

export const StyledFooter = styled.footer`
  background-color: var(--ghostWhite);
`

export const GridContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  ${mq('m')} {
    grid-template-columns: 1fr 1fr;
  }

  ${mq('s')} {
    grid-template-columns: 1fr;
  }
`

export const GridItem = styled.div`
  line-height: 3rem;
  h3 {
    text-transform: uppercase;
    padding-bottom: 1rem;
  }

  h4 {
    font-weight: 400;
  }
`

export const ContactsContainer = styled.div`
  padding-top: 1rem;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;

    svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.6rem;
    }
  }
`

export const MethodsContainer = styled.div`
  padding-top: 1rem;

  div {
    display: flex;
    align-items: center;
  }
`

export const Spacer = styled.div`
  display: none;
  border-bottom: 1px solid var(--darkLiver);
  margin-top: 2rem;
  opacity: 0.4;

  ${mq('s')} {
    display: block;
  }
`
