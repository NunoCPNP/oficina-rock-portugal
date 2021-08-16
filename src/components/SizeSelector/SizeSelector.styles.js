import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

const SizeWithStock = css`
  background-color: var(--darkLiver);
  color: var(--snow);
`;

const SizeOutOfStock = css`
  opacity: 0.4;
`

const getSizeStyles = (props) => {
  if (props.quantity > 0) {
    return SizeWithStock;
  }

  return SizeOutOfStock
};

export const Size = styled.div`
  border: 1px solid var(--darkLiver);
  padding: 1rem;

  ${getSizeStyles}
`;
