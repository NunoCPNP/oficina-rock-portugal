import useTranslation from "next-translate/useTranslation";

import {
  StyledSection,
  GridContainer,
  ItemContainer,
  TextContainer,
} from "./CTA.styles";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <StyledSection>
      <GridContainer>
        <ItemContainer>
          <TextContainer>{t(`common:men`)}</TextContainer>
        </ItemContainer>
        <ItemContainer>
          <TextContainer>{t(`common:women`)}</TextContainer>
        </ItemContainer>
        <ItemContainer>
          <TextContainer>{t(`common:acessories`)}</TextContainer>
        </ItemContainer>
      </GridContainer>
    </StyledSection>
  );
};

export default CTA;
