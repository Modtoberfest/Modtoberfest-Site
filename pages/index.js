import Layout from "../components/layout";
import MainSection from "./index/MainSection";
import { getEventStage } from "../lib/stage";

function IndexPage({ stage }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-full">
        <MainSection stage={stage} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      stage: getEventStage(),
    },
  };
}

export default IndexPage;
