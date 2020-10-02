import React from "react";
import Layout from "./Layout";
import LoginLink from "./LoginLink";
import Button from "./shared/Button";

export default function MustBeLoggedIn() {
  return (
    <Layout
      className="flex flex-col items-center justify-center"
      title="Login to continue"
    >
      <img src="/logo/half-top.png" width="400" className="mb-5" alt="logo"/>
      <div className="text-center">
        <h1 className="mb-5">You have to login to access this page</h1>
        <LoginLink className="no-underline">
          <Button size="xl">
            Login with Github to get started!
          </Button>
        </LoginLink>
      </div>
    </Layout>
  );
}
