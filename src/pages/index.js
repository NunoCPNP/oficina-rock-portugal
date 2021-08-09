import LogRocket from "logrocket";

import CTA from "@/modules/CTA";

if (typeof window !== "undefined") {
  LogRocket.init("mr3fhc/officina-rock");
}

const Home = () => {
  return (
    <main>
      <CTA />
    </main>
  );
};

export default Home;
