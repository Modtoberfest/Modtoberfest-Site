import React from "react";

export default function FAQItem({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
