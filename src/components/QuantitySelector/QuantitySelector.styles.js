import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  padding-bottom: 1.5rem;
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
    font-size: var(--heading-6);
  }
`;

export const Selector = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: var(--heading-3);
  border: 1px solid var(--darkLiver);
  padding: 0.75rem 0.9rem;

  div {
    padding: 0 1rem;
  }

  svg {
    cursor: pointer;
  }
`;
