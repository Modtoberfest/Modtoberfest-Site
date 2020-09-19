import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function Page404() {
  return (
    <Layout className="flex flex-col items-center justify-center">
      <img src="logo-half.png" width="400" className="mb-5" />
      <div className="text-center">
        <h1 className="mb-5">404 - This page doesn't exist</h1>
        <Link href="/">
          <a className="underline">
            <h2>Go home</h2>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
