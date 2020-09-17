import Layout from "../components/Layout";
import { getEventStage } from "../lib/stage";
import Details from "./index/Details";
import MainSection from "./index/MainSection";
import WIP from "./index/WIP";

function IndexPage() {
  const stage = getEventStage();

  // if (stage == "pre" && new Date().getUTCDay() + 1 < 21) {
  //   return <WIP />;
  // }

  return (
    <Layout>
      <MainSection />
      <Details className="mt-4" />
    </Layout>
  );
}

export default IndexPage;
