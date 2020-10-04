import React from "react";
import { getSession, useSession } from "next-auth/client";
import Layout from "../components/Layout";
import { getEventStage } from "../lib/stage";
import PageTitle from "../components/shared/PageTitle";
import MustBeLoggedIn from "../components/MustBeLoggedIn";
import { fetchJson } from "../lib/api";
import { getAccountFromSession } from "../lib/user";
import PullRequest from "../components/PullRequest";
import ChallengeComplete from "../components/Progress/ChallengeComplete";
import TrackingNotice from "../components/Progress/TrackingNotice";
import ErrorPage from "../components/ErrorPage";

export default function Progress({ count, prs, error }) {
  const stage = getEventStage();
  const [session] = useSession();

  if (!session) {
    return <MustBeLoggedIn />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
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
              alt="avatar"
            />
            {user.name}
          </div>
        </div>
      </PageTitle>
      <div className="text-center my-10">
        {count >= 4 && <ChallengeComplete />}
        <h1 className="text-center bg-warm-red mb-2 rounded-lg p-5">
          Contributions: <span className="font-bold">{count} / 4</span>
        </h1>
        {count === 1 && <h2>3 to go!</h2>}
        {count === 2 && <h2>Only 2 left!</h2>}
        {count === 3 && <h2>1 left, so close!</h2>}
        {prs.map((pr) => (
          <PullRequest
            repositoryName={pr.repository_name}
            sponsorName={pr.sponsor_name}
            url={pr.url}
            key={pr.pr_id}
          />
        ))}
        {count < 4 && <TrackingNotice />}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return { props: { count: 0 } };
  }

  const account = await getAccountFromSession(session.accessToken);

  try {
    const data = await fetchJson(`users/${account.participant_id}/progress`);

    if (data.error) {
      return {
        props: {
          error: { message: "There was an error fetching your progress." },
        },
      };
    }

    return { props: { count: data.unique, prs: data.prs } };
  } catch (error) {
    return {
      props: {
        error: { message: "There was an error fetching your progress." },
      },
    };
  }
}
