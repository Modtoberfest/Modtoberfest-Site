import React from "react";
import Button from "../../../components/shared/Button";
export default function PreEventLanding() {
  return (
    <div className="flex flex-col items-center">
      <img src="/logo-half.png" alt="logo" className="mb-12" width="500px" />
      <div className="text-center">
        <h1 className="mb-4 font-brand">
          Support the Open Source Minecraft modding community
          <br />
          and get prizes!
          <br />
          <span className="font-bold text-warm-l-orange">
            Starting October 1st 2020
          </span>
        </h1>
        <a href="https://discord.modtoberfest.com/" target="_blank">
          <Button size="lg">Join our Discord!</Button>
        </a>
      </div>
    </div>
  );
}
