import useTranslation from "next-translate/useTranslation";
import cookie from "cookie-cutter";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import CustomButton from "@/components/CustomButton";

import useSettings from "@/hooks/useSettings";

import { Container, TextContainer, ButtonContainer } from "./GDPR.style";

const GDPR = () => {
  const { t } = useTranslation("common");
  const [state, dispatch] = useSettings();

  useEffect(() => {
    if (cookie.get("OFICINA_ROCK_GDPR") && state.gdprOpen) {
      dispatch({ type: "TOGGLE_GDPR" });
    }
  }, [state, dispatch]);

  return (
    <AnimatePresence>
      {state.gdprOpen && (
        <Container
          initial={{ y: 200 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
        >
          <TextContainer>{t(`gdpr`)}</TextContainer>
          <ButtonContainer>
            <CustomButton
              inverted
              onClick={() => {
                cookie.set("OFICINA_ROCK_GDPR", true);
                dispatch({ type: "TOGGLE_GDPR" });
              }}
            >
              {t(`accept`)}
            </CustomButton>
          </ButtonContainer>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default GDPR;
