import styled from '@emotion/styled'

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
`

export const GridItem = styled.div`
  h4 {
    font-weight: 400;
    line-height: 3rem;
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
