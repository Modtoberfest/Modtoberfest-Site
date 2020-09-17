import React from "react";
import Button from "../../../components/shared/Button";
export default function PreEventLanding() {
  return (
    <div className="flex flex-col items-center">
      <img src="/unknown.png" alt="logo" className="mb-12" width="500px" />
      <div className="text-center">
        <h1 className="mb-8 font-brand">
          Insert engaging text here to hype the event
          <br />
          <span className="text-teal-300 font-bold text-warm-l-orange">
            October 1st 2020
          </span>
        </h1>
        <a href="https://discord.modtoberfest.com/" target="_blank">
          <Button size="lg">Join our Discord!</Button>
        </a>
      </div>
    </div>
  );
}
