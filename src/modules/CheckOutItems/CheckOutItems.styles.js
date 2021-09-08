import styled from '@emotion/styled'

export const Container = styled.div``

export const EmptyBag = styled.div`
  border: 1px solid var(--darkLiver);
  padding: 2rem;
  margin: 4rem;
  text-align: center;
  text-transform: uppercase;
`

export const Bag = styled.div`
  border: 1px solid var(--darkLiver);
  padding: 2rem;
  margin: 4rem;
`

export const BagItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  align-items: center;

  .description {
    padding-left: 2rem;
  }

  .title {
    padding-top: 0.8rem;
    font-weight: 700;
    font-size: var(--heading-3);
  }

  .quantity {
    font-weight: 700;
    font-size: var(--heading-3);
  }

  .price {
    padding: 0 3rem;
    font-weight: 700;
    font-size: var(--heading-3);
  }
`
