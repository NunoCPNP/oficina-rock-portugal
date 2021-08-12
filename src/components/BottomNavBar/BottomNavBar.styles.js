import styled from "@emotion/styled";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem 1rem 4rem;
  background: var(--darkLiver);
  color: var(--snow);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
`;

export const UserInfo = styled.div`
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  ul {
    display: inherit;
    margin: 0;
  }

  li {
    list-style: none;
    padding-right: 1.5rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
