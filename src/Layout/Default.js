import styled from "@emotion/styled";
import dynamic from "next/dynamic";

import Header from "@/modules/Header";

const Main = styled.main`
  max-width: 130rem;
  margin: 0 auto;
  padding-top: 11rem;
`;

const DynamicFooter = dynamic(() => import("@/modules/Footer"));
const DynamicCartDrawer = dynamic(() => import("@/modules/CartDrawer"));
const DynamicGDPR = dynamic(() => import("@/modules/GDPR"));

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <DynamicFooter />
      <DynamicCartDrawer />
      <DynamicGDPR />
    </>
  );
};

export default DefaultLayout;
