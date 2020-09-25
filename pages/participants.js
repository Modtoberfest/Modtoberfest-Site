import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/shared/PageTitle";
import Participant from "../components/Participant";
import { fetchJson } from "../lib/api";

export default function Participants({ sponsors }) {
  return (
    <Layout
      title="Sponsors"
      description="Sponsors making this event possible"
      canonical="/participants"
      className="lg:w-3/4 max-w-full"
    >
      <PageTitle className="text-center">Sponsors</PageTitle>
      <div className="text-center my-2">
        Thank you to our sponsors for making this event possible!
      </div>
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
  return {
    props: { sponsors: await fetchJson("participants") },
  };
}
