import React from "react";
import { getSession, useSession } from "next-auth/client";
import Layout from "../components/Layout";
import { getEventStage } from "../lib/stage";
import PageTitle from "../components/shared/PageTitle";
import MustBeLoggedIn from "../components/MustBeLoggedIn";
import { fetchJson } from "../lib/api";
import { getAccountFromSession } from "../lib/user";
import PullRequest from "../components/Progress/PullRequest";
import ChallengeComplete from "../components/Progress/ChallengeComplete";
import TrackingNotice from "../components/Progress/TrackingNotice";
import ErrorPage from "../components/ErrorPage";
import Link from "next/link";

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
        <div className="flex flex-wrap">
          <div className="flex-grow">Progress</div>
          <div className="flex">
            <img
              src={user.image}
              width="50"
              className="mb-2 mr-3 rounded-full"
              alt="avatar"
            />
            {user.name}
          </div>
        </div>
      </PageTitle>
      <div className="my-10">
        <div className="text-center">
          {count >= 4 && <ChallengeComplete />}
          <h1 className="p-5 mb-2 text-center rounded-lg bg-warm-red">
            Contributions: <span className="font-bold">{count} / 4</span>
          </h1>
          {count === 1 && (
            <h2>
              <span className="font-bold">3</span> to go!
            </h2>
          )}
          {count === 2 && (
            <h2>
              Only <span className="font-bold">2</span> left!
            </h2>
          )}
          {count === 3 && (
            <h2>
              <span className="font-bold">1</span> left, so close!
            </h2>
          )}
        </div>
        <div className="text-center">
          <Link href="/stats">
            <a className="mt-2 text-xl font-bold">Statistics and leaderboard</a>
          </Link>
        </div>
        <h2 className="mt-10 mb-5 text-2xl">Repositories you contributed to</h2>
        {prs.map((pr) => (
          <>
            <hr />
            <PullRequest
              repositoryName={pr.repository_name}
              sponsorName={pr.sponsor_name}
              url={pr.url}
              key={pr.pr_id}
            />
          </>
        ))}
        <hr />
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
