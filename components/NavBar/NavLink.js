import Link from "next/link";
import classNames from "classnames";
import React from "react";

export default function NavLink({ className, children, ...linkProps }) {
  return (
    <Link {...linkProps}>
      <a
        className={classNames(
          className,
          "block mt-4 lg:inline-block lg:mt-0 text-warm-l-orange hover:text-warm-orange mr-4 font-bold transition duration-200 ease-in-out transform hover:-translate-y-px"
        )}
      >
        {children}
      </a>
    </Link>
  );
}
