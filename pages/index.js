import Layout from "../components/layout";
import Landing from "./index/Landing";
import { getCurrentStage } from "../lib/stage";

function IndexPage({ stage }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-full">
        <Landing stage={stage} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      stage: getCurrentStage(),
    },
  };
}

export default IndexPage;
