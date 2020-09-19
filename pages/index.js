import Layout from "../components/Layout";
import { getEventStage } from "../lib/stage";
import Details from "./index/Details";
import MainSection from "./index/MainSection";
import WIP from "./index/WIP";

function IndexPage() {
  const stage = getEventStage();

  if (stage == "pre" && new Date().getUTCDay() + 1 < 21) {
    return <WIP />;
  }

  return (
    <Layout
      title="Modtoberfest"
      description="Support the Open Source Minecraft modding community and get prizes"
      canonical="/"
    >
      <MainSection />
      <Details className="mt-4" />
    </Layout>
  );
}

export default IndexPage;
