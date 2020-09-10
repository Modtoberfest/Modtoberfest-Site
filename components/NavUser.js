import React from "react";
import Link from "next/link";

export default function NavUser({ profile }) {
  if (profile) {
    return (
      <Link href="/progress">
        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 font-bold bg-teal-200 hover:bg-teal-700 hover:text-teal-200 px-4 py-2 rounded-full">
          My progress
        </a>
      </Link>
    );
  } else {
    return (
      <Link href="/login">
        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 font-bold bg-teal-200 hover:bg-teal-700 hover:text-teal-200 px-4 py-2 rounded-full">
          Login
        </a>
      </Link>
    );
  }
}
