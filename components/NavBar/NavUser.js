import React from "react";
import Link from "next/link";

import { signin, signout, useSession } from "next-auth/client";
import Button from "../shared/Button";
import LoginLink from "../LoginLink";

export default function NavUser() {
  const [session] = useSession();

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
          <a>
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
