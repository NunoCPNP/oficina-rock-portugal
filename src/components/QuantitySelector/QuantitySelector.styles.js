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
  display: flex;
  align-items: center;

  div {
    padding: 0 0.5rem 0 0.5rem;
  }
`;
