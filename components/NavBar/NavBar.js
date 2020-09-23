import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import NavUser from "./NavUser";

export default function NavBar() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a>
            <img src="/logo/badge.png" width="80px" />
          </a>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={(e) => {
            setExpanded(!isExpanded);
          }}
        >
          <svg
            className="fill-current h-3 w-3 text-white"
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
        <div className="text-sm lg:flex-grow flex items-center flex-wrap flex-grow">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/rules">Rules</NavLink>
          <NavLink href="/tips">Tips</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/participants">Sponsors</NavLink>
        </div>
        <div>
          <NavUser className="mt-4 lg:mt-0" />
        </div>
      </div>
    </nav>
  );
}
