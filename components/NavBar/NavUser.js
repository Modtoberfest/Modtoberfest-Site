import React from "react";
import Link from "next/link";

import { signin, signout, useSession } from "next-auth/client";
import Button from "../shared/Button";
import LoginLink from "../LoginLink";
import classNames from "classnames";

export default function NavUser({ className }) {
  const [session] = useSession();

  if (session) {
    return (
      <div className={classNames("flex items-center", className)}>
        <a
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault();
            signout();
          }}
          className="text-white mr-3"
        >
          Sign out
        </a>
        <Link href="/progress">
          <a className="no-underline">
            <Button className="flex items-center">
              <img
                src={session.user.image}
                width="30"
                className="rounded-full mr-3"
              />
              <div>My progress</div>
            </Button>
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <LoginLink>
        <Button>Login</Button>
      </LoginLink>
    );
  }
}
