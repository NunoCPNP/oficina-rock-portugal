import styled from "@emotion/styled";
import { css } from "@emotion/react";

const buttonStyles = css`
  background-color: var(--richBlack);
  color: var(--snow);
  border: none;

  &:hover {
    background-color: var(--snow);
    color: var(--richBlack);
    border: 1px solid var(--richBlack);
  }
`;

const invertedButtonStyles = css`
  background-color: var(--snow);
  color: var(--richBlack);
  border: 1px solid var(--richBlack);

  &:hover {
    background-color: var(--richBlack);
    color: var(--snow);
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: var(--darkLiver);
  color: var(--snow);
  border: 1px solid var(--richBlack);

  &:hover {
    background-color: var(--snow);
    color: var(--richBlack);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}

  a {
    text-decoration: none;
    color: inherit;
  }
`;
