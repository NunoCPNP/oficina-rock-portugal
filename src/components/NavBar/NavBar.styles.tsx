import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

type LinkContainerProps = {
  small?: boolean
} 

export const LinkContainer = styled.div<LinkContainerProps>`
  ul {
    display: flex;
    padding-inline-start: ${props => props.small && `0rem`}
  }
  
  li {
    display: inherit;
    align-items: center;
    list-style: none;
    margin-right: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
