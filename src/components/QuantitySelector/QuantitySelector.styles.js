import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 2rem;
`;

export const OutOfStock = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem 0.4rem 1rem;
  text-transform: uppercase;
  border: 1px solid var(--darkLiver);

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  span:not(:last-child) {
    font-size: var(--heading-6)
  }
`