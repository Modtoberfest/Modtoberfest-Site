import React from "react";
import classNames from "classnames";
export default function Button({ children, className, size, ...buttonProps }) {
  const classes =
    "mt-4 lg:mt-0 text-white font-bold bg-warm-orange hover:bg-warm-l-orange px-4 py-2 rounded-full transition duration-200 ease-in-out transform hover:scale-105";
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
