import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { getAccountFromSession } from "../../lib/user";
import knex from "../../lib/knex";

export default function New() {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <Layout>
        <div className="text-center">
          <h1>
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
        <h1 className="font-bold text-center">Welcome to Modtoberfest!</h1>
        <p className="text-center">A couple things before you start</p>
        <div className="mt-5 border-accent-red border-4 p-5">
          <div>
            Make sure you read the rules{" "}
            <Link href="/faq">
              <a>here</a>
            </Link>
          </div>
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
  } catch (e) {
    console.error(e);
  }
  return { props: {} };
}
