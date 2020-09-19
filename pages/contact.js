import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/shared/PageTitle";

export default function Contact() {
  return (
    <Layout
      title="Contact us"
      description="Help, Questions and Inquiries"
      canonical="/contact"
    >
      <PageTitle>Contact</PageTitle>
      <h2 className="mb-2">Discord</h2>
      <p className="mb-2">For questions, support or any inquiry</p>
      <p className="font-bold tracking-wider">
        Join our Discord at{" "}
        <a
          className="underline"
          target="_blank"
          href="https://discord.modtoberfest.com"
        >
          https://discord.modtoberfest.com
        </a>
      </p>
    </Layout>
  );
}
