import useTranslation from "next-translate/useTranslation";
import LogRocket from "logrocket";

if (typeof window !== "undefined") {
  LogRocket.init("mr3fhc/officina-rock");
}

const Home = () => {
  const { t } = useTranslation("home");

  return <div>{t(`greeting`)}</div>;
};

export default Home;
