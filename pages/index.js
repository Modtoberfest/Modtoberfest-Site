import Layout from "../components/Layout";
import Details from "./index/Details";
import MainSection from "./index/MainSection";

function IndexPage() {
  return (
    <Layout>
      <MainSection />
      <Details className="mt-8" />
    </Layout>
  );
}

export default IndexPage;
