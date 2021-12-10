import mq from '@/styles/mediaQueries'
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
  margin: 4rem;

  ${mq('s')} {
    margin: 1rem;
  }
`

export const BagItem = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr 6rem 6rem 6rem 6rem;
  align-items: center;
  border-bottom: 1px solid var(--darkLiver);
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  .title {
    padding-top: 0.8rem;
    font-weight: 700;
    font-size: var(--heading-3);
  }

  .quantity {
    font-weight: 700;
    font-size: var(--heading-3);
    justify-self: center;
  }

  .size {
    font-weight: 700;
    font-size: var(--heading-3);
    justify-self: center;
  }

  .price {
    font-weight: 700;
    font-size: var(--heading-3);
    justify-self: center;
  }

  .remove {
    justify-self: center;
    cursor: pointer;
  }

  ${mq('s')} {
    grid-template-columns: 0rem 1fr 6rem 6rem 6rem 6rem;
  }
`

export const BagItemHeader = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr 6rem 6rem 6rem 6rem;
  align-items: center;
  justify-items: center;
  background-color: var(--darkLiver);
  color: var(--snow);
  padding: 0.5rem 0;
  margin-bottom: 1rem;

  ${mq('s')} {
    grid-template-columns: 0rem 1fr 6rem 6rem 6rem 6rem;
  }
`
