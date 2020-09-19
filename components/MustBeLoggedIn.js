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
      <img src="logo-half.png" width="400" className="mb-5" />
      <div className="text-center">
        <h1 className="mb-5">You have to login to access this page</h1>
        <Button size="xl">
          <LoginLink>Login with Github to get started!</LoginLink>
        </Button>
      </div>
    </Layout>
  );
}
