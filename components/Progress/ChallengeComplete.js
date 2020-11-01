import Link from "next/link";
import React from "react";

export default function ChallengeComplete() {
  return (
    <div>
      <h1 className="mb-5">
        <span className="font-bold">Congratulations!</span>
        <br />
        You completed the Modtoberfest challenge!
        <br />
        <Link href="/claim">
          <a>Claim your sticker pack!</a>
        </Link>
      </h1>
      <p className="text-xl mb-5">
        <br /> Make sure you join our{" "}
        <a href="https://discord.modtoberfest.com/" target="_blank">
          discord
        </a>{" "}
        to stay up to date!
      </p>
    </div>
  );
}
