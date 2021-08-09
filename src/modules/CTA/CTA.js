import {
  StyledSection,
  GridContainer,
  ItemContainer,
  TextContainer,
} from "./CTA.styles";

const CTA = () => (
  <StyledSection>
    <GridContainer>
      <ItemContainer>
        <TextContainer>Men</TextContainer>
      </ItemContainer>
      <ItemContainer>
        <TextContainer>Women</TextContainer>
      </ItemContainer>
      <ItemContainer>
        <TextContainer>Acessories</TextContainer>
      </ItemContainer>
    </GridContainer>
  </StyledSection>
);

export default CTA;
