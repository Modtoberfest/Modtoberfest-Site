import React from "react";

export default function Input({ value, ...props }) {
  return <input className="w-full text-black p-2 rounded-md text-xl font-bold tracking-wide" value={value} {...props} />;
}
