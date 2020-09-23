import React from "react";

export default function TipEntry({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
