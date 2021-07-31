import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2, 5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;  
  }
  
  li {
    list-style: none;
    margin-right: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
