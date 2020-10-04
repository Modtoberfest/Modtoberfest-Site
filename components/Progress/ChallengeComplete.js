import React from "react";

export default function ChallengeComplete() {
  return (
    <div>
      <h1 className="mb-5">
        <span className="font-bold">Congratulations!</span>
        <br />
        You completed the Modtoberfest challenge!
      </h1>
      <p className="text-xl mb-5">
        You will be able to claim your reward shortly.
        <br /> Make sure you join our{" "}
        <a href="https://discord.modtoberfest.com/" target="_blank">
          discord
        </a>{" "}
        to stay up to date or come back later!
      </p>
    </div>
  );
}
