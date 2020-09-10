import Layout from "../components/layout";
import Landing from "./index/landing";

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-full">
        <Landing />
      </div>
    </Layout>
  );
}

export default IndexPage;
