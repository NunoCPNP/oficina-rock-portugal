import styled from "@emotion/styled";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2.7rem;
  background: var(--darkLiver);
  color: var(--snow);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);

  ul {
    display: inherit;
    margin: 0;
  }

  li {
    list-style: none;
    padding-right: 1.5rem;
  }
`