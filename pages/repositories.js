import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/shared/PageTitle";
import Repository from "../components/Repository";
import { fetchJson } from "../lib/api";

export default function Repositories({ repositories }) {
  return (
    <Layout
      title="Repositories"
      description="Repositories to contribute to for Modtoberfest"
      canonical="/repositories"
      className="max-w-full"
    >
      <PageTitle className="text-center">Repositories</PageTitle>
      <div className="text-center my-2">
        There are {repositories.length} repositories to contribute to, pick one
        and get started!
      </div>
      {repositories.length === 0 ? (
        <div>Coming soon!</div>
      ) : (
        <div className="flex flex-wrap">
          {repositories.map((repo) => (
            <Repository
              description={repo.description}
              repositoryName={repo.repository_name}
              sponsorId={repo.sponsorId}
              sponsorName={repo.sponsor_name}
              url={repo.url}
              key={repo.repository_name}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { repositories: await fetchJson("repositories") },
    revalidate: 60
  };
}
