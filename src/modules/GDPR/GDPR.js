import useTranslation from "next-translate/useTranslation";

import useSettings from "@/hooks/useSettings";

import { Container } from "./GDPR.style";

const GDPR = () => {
  const { t } = useTranslation("common");
  const {} = useSettings();

  return (
    <Container>
      <div></div>
      <div></div>
    </Container>
  );
};

export default GDPR;
