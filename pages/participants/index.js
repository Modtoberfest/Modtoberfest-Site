import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/shared/PageTitle";
import knex from "../../lib/knex";
import Participant from "./Participant";

export default function Participants({ sponsors }) {
  return (
    <Layout
      title="Sponsors"
      description="Sponsors making this event possible"
      canonical="/participants"
    >
      <PageTitle>Sponsors</PageTitle>
      <p>Thank you to our sponsors for making this event possible!</p>
      <div className="flex flex-wrap">
        {sponsors.map((sponsor) => (
          <Participant
            key={sponsor.id}
            githubUser={sponsor.github_user}
            id={sponsor.id}
            imageUrl={sponsor.image_url}
            name={sponsor.name}
            summary={sponsor.summary}
            twitterHandle={sponsor.twitter_handle}
            websiteUrl={sponsor.website_url}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const sponsors = await knex("sponsor").select();

  return {
    props: { sponsors },
  };
}
