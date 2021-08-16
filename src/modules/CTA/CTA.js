import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import {
  StyledSection,
  GridContainer,
  ItemContainer,
  TextContainer,
} from "./CTA.styles";

const CTA = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <StyledSection>
      <GridContainer>
        <ItemContainer
          style={{
            backgroundImage:
              "url('The-Clash-London-calling-t-shirt-site_grande.webp')",
          }}
          onClick={() => router.push("/men")}
        >
          <TextContainer>
            <h2>{t(`common:men`)}</h2>
          </TextContainer>
        </ItemContainer>
        <ItemContainer
          style={{ backgroundImage: "url('il_340x270.2320330733_o5gr.avif')" }}
          onClick={() => router.push("/women")}
        >
          <TextContainer>
            <h2>{t(`common:women`)}</h2>
          </TextContainer>
        </ItemContainer>
        <ItemContainer
          style={{
            backgroundImage:
              "url('Men-hip-hop-loose-t-shirt-2019-summer-Half-sleeve-T-shirt-Casual-tshirt-streetwear-2019.webp')",
          }}
          onClick={() => router.push("/acessories")}
        >
          <TextContainer>
            <h2>{t(`common:acessories`)}</h2>
          </TextContainer>
        </ItemContainer>
      </GridContainer>
    </StyledSection>
  );
};

export default CTA;
