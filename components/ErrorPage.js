import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import Button from "./shared/Button";

export default function ErrorPage({ message }) {
  return (
    <Layout
      className="flex flex-col items-center justify-center"
      title="Error"
      description="There was an error with that page"
    >
      <div className="text-center">
        <h1 className="mb-2">Oops! Looks like we ran into an error.</h1>
        <h2 className="pb-5">{message}</h2>
        <a href="https://discord.modtoberfest.com/" target="_blank">
          <Button className="mb-5" size="lg">
            Contact on Discord
          </Button>
        </a>
        <Link href="/">
          <a>
            <h2>Go home</h2>
          </a>
        </Link>
      </div>
      <img
        src="/logo/half-bottom.png"
        width="400"
        className="mt-5"
        alt="logo"
      />
    </Layout>
  );
}
