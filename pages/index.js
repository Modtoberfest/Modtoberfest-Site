import Layout from "../components/layout";
import MainSection from "./index/MainSection";

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-full">
        <MainSection />
      </div>
    </Layout>
  );
}

export default IndexPage;
