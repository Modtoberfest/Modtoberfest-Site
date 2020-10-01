import React from "react";
import { getSession, useSession } from "next-auth/client";
import Layout from "../components/Layout";
import { getEventStage } from "../lib/stage";
import PageTitle from "../components/shared/PageTitle";
import MustBeLoggedIn from "../components/MustBeLoggedIn";
import { fetchJson } from "../lib/api";
import { getAccountFromSession } from "../lib/user";
import { info } from "../lib/discord-notifier";

export default function Progress({ count }) {
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
        <div className="text-center my-10">
          {count >= 4 && (
            <div>
              <h1 className="mb-5">
                <span className="font-bold">Congratulations!</span>
                <br />
                You completed the Modtoberfest challenge!
              </h1>
              <p className="text-xl mb-5">
                You will be able to claim your reward shortly.
                <br /> Make sure you join our{" "}
                <a href="https://discord.modtoberfest.com/" target="_blank">
                  discord
                </a>{" "}
                to stay up to date or come back later!
              </p>
            </div>
          )}
          <h1 className="text-center bg-warm-red mb-2 rounded-lg p-5">
            Contributions: <span className="font-bold">{count} / 4</span>
          </h1>
          {count === 1 && <h2>3 to go!</h2>}
          {count === 2 && <h2>Only 2 left!</h2>}
          {count === 3 && <h2>1 left, so close!</h2>}
          {count < 4 && (
            <div className="text-center mt-5">
              <h2>
                Notice: Your contributions won't show up instantly.
                <br />
                Don't worry! They are still accounted for.
              </h2>
            </div>
          )}
        </div>
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

  const count = await fetchJson(`users/${account.participant_id}/progress`);

  if (count === 4) {
    await info(`${account.name} completed 4 PRs!`, null, [
      {
        name: "Participant ID",
        value: account.participant_id,
      },
    ]);
  }
  return { props: { count: count.unique } };
}
