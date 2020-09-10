import Link from "next/link";
import React, { useState } from "react";
import NavUser from "./NavUser";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState(false);

  // This will have to be fetched from some state
  // this is just a mock up
  const isLoggedIn = Math.random() < 0.5;
  const user = isLoggedIn
    ? {
        imageUrl: "monky.jpg",
      }
    : null;

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-gradient-to-b from-teal-700 to-teal-900">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="/site-logo.svg"
          alt="The modtoberfest logo."
          className="w-8 h-8 mr-2"
        />
        <a className="font-semibold text-xl tracking-tight">Modtoberfest</a>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={(e) => {
            setExpanded(!isExpanded);
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full ${
          isExpanded ? "block" : "hidden"
        } flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow flex flex-row-reverse items-center">
          <NavUser profile={user} />

          <Link href="/faq">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              FaQ
            </a>
          </Link>

          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
