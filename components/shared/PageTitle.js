import React from "react";

export default function PageTitle({ children }) {
  return (
    <h1 className="font-brand border-b-2 border-teal-500 tracking-wide mb-4 flex">
      {children}
    </h1>
  );
}
