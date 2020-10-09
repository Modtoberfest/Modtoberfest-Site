import React from "react";
import PostEvent from "./PostEvent";
import Link from "next/link";
import { getEventStage } from "../../lib/stage";
import Button from "../shared/Button";
import { useSession } from "next-auth/client";
import LoginLink from "../LoginLink";

export default function MainSection() {
  const stage = getEventStage();
  const [session] = useSession();

  if (stage == "post") {
    return <PostEvent />;
  }

  return (
    <div className="flex flex-col items-center text-center">
      <img src="/logo/half-top.png" alt="logo" className="mb-6" width="500px" />
      <h1 className="mb-4 font-brand">
        Support the Open Source Minecraft modding community
        <br />
        <span className="font-bold text-warm-l-orange">
          and get exclusive stickers!
        </span>
      </h1>
      {session ? (
        <Link href="/progress">
          <a className="no-underline">
            <Button size="xl">My progress</Button>
          </a>
        </Link>
      ) : (
        <LoginLink className="no-underline">
          <Button size="xl">Get started!</Button>
        </LoginLink>
      )}
      <Link href="/stats">
        <a className="mt-2 text-xl font-bold">Statistics and leaderboard</a>
      </Link>
    </div>
  );
}
