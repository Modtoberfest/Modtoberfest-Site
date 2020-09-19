import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Button from "../components/shared/Button";

export default function Page404() {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1>This page does not exist</h1>
          <hr className="mb-3" />
          <h2 className="mb-5">404</h2>
          <Button size="xl">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
