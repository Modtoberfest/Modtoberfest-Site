import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import LoginLink from "../../components/LoginLink";
import PageTitle from "../../components/shared/PageTitle";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <Layout
      title="FAQ"
      description="Frequently asked question"
      canonical="/faq"
    >
      <PageTitle>Frequently Asked Questions</PageTitle>
      <p>
        See the{" "}
        <Link href="/rules">
          <a className="underline font-bold">rules</a>
        </Link>
      </p>
      <div className="faq">
        <FAQItem title="What is Modtoberfest?">
          Modtoberfest is a celebration of the open source Minecraft modding
          community. During the event we challenge participants to create
          quality pull requests for various community projects. You can{" "}
           <LoginLink>
             <a className="underline">sign up</a>
          </LoginLink> any time during October 2020. Modtoberfest is inspired by 
          Digital Ocean's{" "}
          <a
            className="underline"
            href="https://hacktoberfest.digitalocean.com/"
            target="_blank"
          >
            Hacktoberfest
          </a> challenge which has similar goals.
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
        <FAQItem title="What is the Modtoberfest challenge?">
          We are challenging community members to participate in the open source
          community. To complete the challenge you must submit a pull request to
          four different projects that are managed by four different
          groups/organizations. Pull requests will only be tracked for
          participating projects. See our{" "}
           <Link href="/rules">
             <a className="underline">rules</a>
          </Link> for more information.
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
        <FAQItem title="What time zone does the event use?">
          We are using{" "}
          <a
            className="underline"
            href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=Modtoberfest&iso=20201001T00&p1=1440"
            target="_blank"
          >
            UTC
          </a> for the event. All pull request data is taken from
          GitHub's API which also uses UTC. Please keep in mind that time is
          tricky and some discrepencies may occur. 
        </FAQItem>
        <FAQItem title = "How are pull requests tracked?">
          We are tracking all pull requests created on participating projects
          during October 2020. This data is pulled in from the GitHub search
          API.
        </FAQItem>
        <FAQItem title = "Do pull requests made before signing up still count?">
          Yes we will count any previous pull requests as long as they were made
          during the event and follow our{" "}
           <Link href="/rules">
             <a className="underline">rules</a>
          </Link>.
        </FAQItem>
        <FAQItem title = "Do commits count?">
          No, we will only be tracking pull requests. Additionally pull
          requests will only contribute to the challenge score of the 
          pull request's author. 
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
      </div>
    </Layout>
  );
}
