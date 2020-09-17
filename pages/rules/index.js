import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/shared/PageTitle";

export default function Rules() {
  return (
    <Layout>
      <PageTitle>Rules</PageTitle>
      <p>
        See the{" "}
        <Link href="/faq">
          <a className="underline font-bold">FAQ</a>
        </Link>
      </p>
      <div className="rules">
        <h3 className="font-bold tracking-wider mb-2 mt-5">Rules</h3>
        <ol>
          <li>You must sign up before the end of October 2020</li>
          <li>Pull requests must be made during October 2020</li>
          <li>
            Only pull requests against GitHub repositories on our participating
            projects list count towards your progress in the challenge
          </li>
          <li>
            You must submit a pull request to four{" "}
            <span className="underline">different</span> repositories managed by{" "}
            <span className="underline">different</span> groups/organizations
          </li>
          <li>Pull requests must meet our quality standards</li>
          <li>
            Rewards and prizes for completing the challenge are limited to one
            per person
          </li>
          <h3 className="font-bold tracking-wider mb-2 mt-5">
            Quality Control
          </h3>
          <p>
            To ensure a minimum standard of quality the following types of pull
            requests will not contribute to your challenge goals. We will be
            manually reviewing all PRs to ensure this policy is enforced.
          </p>
          <ul>
            <li>- Pull requests that have been scripted or automated</li>
            <li>- Pull requests that hurt a project more than they help.</li>
            <li>
              - Pull requests that focus on minor changes such as whitespace,
              indenting, typos, and optimizing assets and images.
            </li>
          </ul>
          <p>
            Additionally any project maintainer may mark your pull request with
            the <code>invalid</code> label which will automatically disqualify
            that pull request from our systems.
          </p>
        </ol>
      </div>
    </Layout>
  );
}
