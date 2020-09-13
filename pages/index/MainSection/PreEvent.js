import React from "react";
export default function PreEventLanding() {
  return (
    <div className="flex flex-col items-center">
      <img src="/logo.png" alt="logo" className="mb-12" width="300px" />
      <div className="text-center">
        <h1 className="mb-12 font-brand">
          Insert engaging text here to hype the event
          <br />
          <span className="text-teal-300 font-bold">October 1st 2020</span>
        </h1>
        <a href="https://discord.modtoberfest.com/" target="_blank">
          <button className="font-brand bg-accent-red hover:bg-accent-red-700 py-4 px-8 rounded-full text-xl">
            Join our Discord!
          </button>
        </a>
      </div>
    </div>
  );
}
