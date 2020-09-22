import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/shared/PageTitle";
import knex from "../../lib/knex";
import { getEventStage } from "../../lib/stage";
import Participant from "./Participant";

export default function Participants({ sponsors }) {
  return (
    <Layout
      title="Sponsors"
      description="Sponsors making this event possible"
      canonical="/participants"
      className="max-w-full"
    >
      <PageTitle className="text-center">Sponsors</PageTitle>
      <p className="text-center">
        Thank you to our sponsors for making this event possible!
      </p>
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
            subreddit={sponsor.subreddit}
            discord={sponsor.discord}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const sponsors = await knex.table("sponsor").select().orderBy("name", "asc");

  if (getEventStage() === "pre") {
    sponsors.push({
      name: "More coming soon!",
      github_user: "Modtoberfest",
      website_url: "https://modtoberfest.com/faq",
    });
  }

  return {
    props: { sponsors },
  };
}
