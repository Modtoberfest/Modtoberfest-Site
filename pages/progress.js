import React from "react";
import { useSession } from "next-auth/client";
import Layout from "../components/Layout";
import { getEventStage } from "../lib/stage";
import PageTitle from "../components/shared/PageTitle";
import MustBeLoggedIn from "../components/MustBeLoggedIn";

export default function Progress() {
  const stage = getEventStage();
  const [session] = useSession();

  if (!session) {
    return <MustBeLoggedIn />;
  }

  const { user } = session;

  return (
    <Layout
      title="My Progress"
      description="See the progress you made in the Modtoberfest challenge!"
      canonical="/progress"
    >
      <PageTitle>
        <div className="flex">
          <div className="flex-grow">Progress</div>
          <div className="flex">
            <img
              src={user.image}
              width="50"
              className="rounded-full mr-3 mb-2"
            />
            {user.name}
          </div>
        </div>
      </PageTitle>
      <div>
        <div className="bg-warm-red rounded-lg p-4 text-center mb-5">
          <h2 className="font-bold">
            Notice: your contributions won't show up instantly.
            <br />
            Don't worry! They are still accounted for.
          </h2>
        </div>
        <h1>
          Contributions: <span className="font-bold">0 / 4</span>
        </h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
