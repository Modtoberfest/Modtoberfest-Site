import React from "react";
import PreEvent from "./PreEvent";
import PostEvent from "./PostEvent";
import Link from "next/link";
import { getEventStage } from "../../../lib/stage";
import Button from "../../../components/shared/Button";
import { useSession } from "next-auth/client";
import LoginLink from "../../../components/LoginLink";

export default function MainSection() {
  const stage = getEventStage();
  const [session] = useSession();

  if (stage == "pre") {
    return <PreEvent />;
  }

  if (stage == "post") {
    return <PostEvent />;
  }

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <img src="/logo.png" alt="logo" className="mb-12" width="300px" />
        <h1 className="mb-8 font-brand">
          Support the open source Minecraft&trade; modding community
          <br />
          <span className="text-teal-300 font-bold">
            Get exclusive stickers!
          </span>
        </h1>
        <Button size="xl">
          {session ? (
            <Link href="/progress">My progress</Link>
          ) : (
            <LoginLink>Login with Github to get started!</LoginLink>
          )}
        </Button>
      </div>
    </>
  );
}
