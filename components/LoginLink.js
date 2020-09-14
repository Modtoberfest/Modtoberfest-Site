import React from "react";
import { signin } from "next-auth/client";

export default function LoginLink({ children }) {
  return (
    <a
      href={`/api/auth/signin`}
      onClick={(e) => {
        e.preventDefault();
        signin("github");
      }}
    >
      {children}
    </a>
  );
}
