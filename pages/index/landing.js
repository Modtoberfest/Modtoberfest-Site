import React from "react";
import PreEventLanding from "./PreEventLanding";
import PostEventLanding from "./PostEventLanding";

export default function Landing({ stage }) {
  if (stage == "pre") {
    return <PreEventLanding />;
  }

  if (stage == "post") {
    return <PostEventLanding />;
  }

  return (
    <div className="flex flex-col items-center">
      <img src="/logo.png" alt="logo" className="mb-12" width="300px" />
      <div className="text-center">
        <h1 className="mb-12 font-brand">
          Support the open source Minecraft&trade; modding community
          <br />
          <span className="text-teal-300 font-bold">
            Get exclusive stickers!
          </span>
        </h1>
        <button className="font-brand bg-accent-red hover:bg-accent-red-700 py-4 px-8 rounded-full text-xl">
          Start modding!
        </button>
      </div>
    </div>
  );
}
