import React from "react";
import Link from "next/link";
import classNames from "classnames";

import { signin, signout, useSession } from "next-auth/client";

export default function NavUser() {
  const [session, loading] = useSession();

  const classes =
    "mt-4 lg:mt-0 text-white font-bold bg-accent-red hover:bg-accent-red-700 px-4 py-2 rounded-full";

  if (session) {
    return (
      <div className="flex items-center">
        <a
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault();
            signout();
          }}
        >
          <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Sign out
          </button>
        </a>
        <Link href="/progress">
          <a className={classNames(classes, "flex items-center")}>
            <img
              src={session.user.image}
              width="40"
              className="rounded-full mr-2"
            />
            <div>My progress</div>
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <a
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signin();
        }}
        className={classes}
      >
        Login
      </a>
    );
  }
}
