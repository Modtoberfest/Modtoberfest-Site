import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/shared/PageTitle";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <Layout>
      <PageTitle>Frequently Asked Questions</PageTitle>
      <p>
        See the{" "}
        <Link href="/rules">
          <a className="underline font-bold">rules</a>
        </Link>
      </p>
      <div className="faq">
        <FAQItem title="What is Modtoberfest?">
          Modtoberfest is a celebration of the open source minecraft modding
          community. During the event we challenge participants to create
          quality pull requests for various community projects. You can sign up
          any time during October 2020. Modtoberfest is inspired by Digital
          Ocean's Hactoberfest challenge which has similar goals.
        </FAQItem>
        <FAQItem title="What is open source?">
          Open source describes a project that allows anyone to view or modify
          the source code. Open source projects are a great resource for
          learning and encourage collaboration and freedom.
        </FAQItem>
        <FAQItem title="What is a pull request?">
          Pull requests are a way to submit contributions to a project. For
          example if you create a copy of a project and fix a bug or add a new
          feature you can isolate those changes and submit them to the original
          project. If the original project approves your changes they can be
          merged and will become a part of the official project.
        </FAQItem>
        <FAQItem title="Is there a prize for participating?">
          Those who complete our challenge will be eligible to receive a sticker
          pack containing many stickers including at least one limited sticker.
          Supplies are limited and will only be given out while they are
          available. Sticker packs are limited to one per person.
        </FAQItem>
        <FAQItem title="Does the pull request need to be merged">
          No the pull request does not need to be merged. The only requirements
          are that it passes our quality control policy and is not a draft PR.
        </FAQItem>
        <FAQItem title="How will the rewards be shipped?">
          We will be shipping rewards through Canada Post. International
          shipping is supported, you can find the full list of supported
          countries{" "}
          <a
            className="underline"
            href="https://www.canadapost.ca/tools/pg/manual/pgIntDest-e.asp?letter=A"
            target="_blank"
          >
            here
          </a>
          <br />
          Tracking information will not be provided for rewards and replacements
          are not guaranteed.
        </FAQItem>
        <FAQItem title="How can I add my projects to the approved project list?">
          The ability to add new projects is restricted to those who have
          directly sponsored the event in some capacity. If you would like to
          co-sponsor this event, reach out to Darkhax or an organizer in the{" "}
          <a
            href="https://discord.modtoberfest.com"
            target="_blank"
            className="underline"
          >
            Discord server
          </a>
        </FAQItem>
      </div>
    </Layout>
  );
}
