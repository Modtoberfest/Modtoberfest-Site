import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/shared/PageTitle";
import knex from "../lib/knex";
import Repository from "../components/Repository";

export default function Repositories({ repositories }) {
  return (
    <Layout
      title="Repositories"
      description="Repositories to contribute to for Modtoberfest"
      canonical="/repositories"
      className="max-w-full"
    >
      <PageTitle className="text-center">Repositories</PageTitle>
      <p className="text-center">
        Contribute to these repositories to complete the Modtoberfest challenge!
      </p>
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

export async function getServerSideProps(context) {
  const repositories = await knex
    .table("repository")
    .select(
      "repository.name as repository_name",
      "repository.description",
      "repository.url",
      "sponsor.name as sponsor_name",
      "sponsor.id as sponsor_id"
    )
    .join("sponsor", "sponsor.id", "repository.sponsor_id")
    .orderBy("repository.name");

  return {
    props: { repositories },
  };
}
