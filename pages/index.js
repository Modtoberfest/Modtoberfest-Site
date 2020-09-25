import Layout from "../components/Layout";
import Details from "../components/Details";
import MainSection from "../components/MainSection";

function IndexPage() {
  return (
    <Layout
      title="Modtoberfest"
      description="Support the Open Source Minecraft modding community and get prizes"
      canonical="/"
      className="flex flex-col"
    >
      <div className="flex-grow flex items-center justify-center">
        <MainSection />
      </div>
      <Details className="mt-4" />
    </Layout>
  );
}

export default IndexPage;
