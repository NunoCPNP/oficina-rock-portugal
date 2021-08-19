import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const SizesContainer = styled.div`
  display: flex;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  padding-bottom: 1.5rem;
`;

export const Size = styled.div`
  cursor: pointer;
  border: 1px solid var(--darkLiver);
  padding: 0.9rem;
  background-color: ${(props) => props.selected && "var(--darkLiver)"};
  color: ${(props) => props.selected && "var(--snow)"};
`;
