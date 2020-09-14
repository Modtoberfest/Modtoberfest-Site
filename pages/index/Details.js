import React from "react";
import Link from "next/link";
import classNames from "classnames";

export default function Details({ className }) {
  const titleClasses = "text-teal-200 font-brand font-bold tracking-wider mt-4";
  return (
    <div className={classNames(className, "text-center")}>
      <h2 className={titleClasses}>What is modtoberfest?</h2>
      <p>
        Short paragraph that explains what modtoberfest is. Keep it short. Keep
        it simple and yeah.
      </p>

      <h2 className={titleClasses}>How do I participate?</h2>
      <p>
        Make 4 pull request to unique{" "}
        <Link href="/participants">
          <a className="underline">participant repositories</a>
        </Link>
      </p>

      <h2 className={titleClasses}>
        <Link href="/faq">
          <a className="underline">FAQ</a>
        </Link>{" "}
        -{" "}
        <Link href="/about">
          <a className="underline">About</a>
        </Link>{" "}
        -{" "}
        <Link href="/participants">
          <a className="underline">Participants</a>
        </Link>
      </h2>
    </div>
  );
}
