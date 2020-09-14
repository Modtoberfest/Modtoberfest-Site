import React from "react";
import classNames from "classnames";
export default function Button({ children, className, size, ...buttonProps }) {
  const classes =
    "mt-4 lg:mt-0 text-white font-bold bg-accent-red hover:bg-accent-red-600 px-4 py-2 rounded-full";
  return (
    <button
      className={classNames(classes, className, {
        "px-8 py-4 text-xl": size == "lg",
        "px-10 py-4 text-2xl": size == "xl",
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
