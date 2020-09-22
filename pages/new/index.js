import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { getAccountFromSession } from "../../lib/user";
import knex from "../../lib/knex";
import PageTitle from "../../components/shared/PageTitle";
import { info } from "../../lib/discord-notifier";

export default function New() {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <Layout title="Sign in with Github" canonical="/new">
        <div className="text-center">
          <h1 className="font-brand">
            Please sign in with your Github account to complete the registration
            process.
          </h1>
          <p>
            <Link href="/">
              <a className="underline text-xl hover:text-white">Back home</a>
            </Link>
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="text-xl text-center">
        <PageTitle className="text-center">Welcome to Modtoberfest!</PageTitle>
        <p className="text-center">
          You're on! Here's some things to know about the event
        </p>
        <div className="my-5">
          <ul>
            <li>
              - Read the{" "}
              <Link href="/rules">
                <a className="underline">rules</a>
              </Link>
            </li>
            <li>
              - Checkout the{" "}
              <Link href="/faq">
                <a className="underline">FAQ</a>
              </Link>
            </li>
            <li>
              - For questions, issues or just chatting, join us on{" "}
              <a
                className="underline"
                target="_blank"
                href="https://discord.modtoberfest.com"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full pb-10">
            <p>Get modding and have fun!</p>
            <p className="text-sm">- the Modtoberfest team</p>
          </div>
          <img src="/logo/half-bottom.png" width="400"></img>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // This is a hack because next-auth has no way to hook into
  // account creation POST creation, so new users get redirected
  // here and this runs, so it's basically a post creation callback
  try {
    const session = await getSession(context);

    if (!session) {
      return { props: {} };
    }

    const account = await getAccountFromSession(session.accessToken);

    // Check if participant exists with that id
    const participantExists = await knex("participant")
      .select("id")
      .where("github_id", account.github_id)
      .first();

    if (participantExists) {
      return { props: {} };
    }

    // Participant doesn't exist, create entry
    const insertRes = await knex("participant").insert({
      account_id: account.id,
      admin: false,
      github_id: account.github_id,
    });

    await info("New user signed up", null, [
      {
        name: "Name",
        value: account.name,
      },
      {
        name: "GH ID",
        value: account.github_id,
      },
      {
        name: "UUID",
        value: account.id,
      },
    ]);
  } catch (e) {
    console.error(e);
  }
  return { props: {} };
}
