import React from "react";
import classNames from "classnames";

export default function PageTitle({ className, children }) {
  return (
    <h1
      className={classNames(
        "font-brand border-b-2 border-teal-500 tracking-wide mb-4 pb-2",
        className
      )}
    >
      {children}
    </h1>
  );
}
