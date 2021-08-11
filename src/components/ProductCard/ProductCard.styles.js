import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: 1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  
  span {
    font-size: var(--smallFontSize);
    margin: 0.3rem;
  }

  h3 {
    margin: 0.3rem;
  }

  h4 {
    margin: 0.3rem;
    font-weight: 400;
  }
`;
