import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Link from "next/link";

export default function PreEventLanding() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h2>You're on! Reload the page to get started!</h2>;
    }
    return (
      <span className="text-3xl font-bold tracking-widest">
        {zeroPad(days)}D {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  const date = new Date(1601460000 * 1000);

  return (
    <div className="flex flex-col items-center">
      <img src="/logo.png" alt="logo" className="mb-12" width="300px" />
      <div className="text-center">
        <h1 className="mb-12 font-brand">
          Insert engaging text here to hype the event
          <br />
          <span className="text-teal-300 font-bold">October 1st 2020</span>
        </h1>
        <div className="mb-12">
          <Countdown date={date} renderer={renderer} daysInHours={true} />
        </div>
        <a href="https://discord.modtoberfest.com/" target="_blank">
          <button className="font-brand bg-accent-red hover:bg-accent-red-700 py-4 px-8 rounded-full text-xl">
            Join our Discord!
          </button>
        </a>
      </div>
    </div>
  );
}
