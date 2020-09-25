import React from "react";
import { signin } from "next-auth/client";
import classNames from "classnames";

export default function LoginLink({ className, children }) {
  return (
    <a
      href={`/api/auth/signin`}
      className={classNames(className)}
      onClick={(e) => {
        e.preventDefault();
        signin("github");
      }}
    >
      {children}
    </a>
  );
}
