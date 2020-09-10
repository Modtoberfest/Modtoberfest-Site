import React from "react";
import Link from "next/link";

export default function NavUser({ profile }) {
  const classes =
    "block mt-4 lg:inline-block lg:mt-0 text-white font-bold bg-accent-red hover:bg-accent-red-700 px-4 py-2 rounded-full";
  if (profile) {
    return (
      <Link href="/progress">
        <a className={classes}>My progress</a>
      </Link>
    );
  } else {
    return (
      <Link href="/login">
        <a className={classes}>Login</a>
      </Link>
    );
  }
}
