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
        {stage == "pre" && (
          <p className="text-xl">
            The event hasn't started yet! Come back on October 1st 2020!
          </p>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
