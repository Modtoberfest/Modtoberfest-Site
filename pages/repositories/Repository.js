import React from "react";
import Link from "next/link";

export default function Repository({
  repository_name,
  description,
  sponsor_id,
  sponsor_name,
  url,
}) {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/4 p-2 lg:p-5">
      <div className="h-full p-2">
        <h2 className="font-bold text-warm-l-orange tracking-wide">
          <a href={url} target="_blank">
            {repository_name}
          </a>
        </h2>
        <h3 className="pb-3">
          Sponsored by{" "}
          <Link href={`/participant/${sponsor_id}`}>
            <a className="underline">{sponsor_name}</a>
          </Link>
        </h3>
        <p>{description}</p>
        <a href={url} className="underline" target="_blank">
          {url}
        </a>
      </div>
    </div>
  );
}
