import React from "react";
import Link from "next/link";

export default function Repository({
  repositoryName,
  description,
  sponsorId,
  sponsorName,
  url,
}) {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/4 p-2 lg:p-5">
      <div className="flex flex-col h-full p-5 border-2 border-warm-l-orange rounded-lg">
        <div>
          <h2 className="my-2 font-bold text-warm-l-orange tracking-wide">
            <a href={url} target="_blank">
              {repositoryName}
            </a>
          </h2>
          <div className="flex my-2">
            <div>
              <img
                src="/icons/github-logo-128.png"
                width="25"
                className="mr-2"
              />
            </div>
            <a className="font-bold" href={url} target="_blank">
              {url.replace("https://github.com/", "")}
            </a>
          </div>
        </div>
        <p className="flex-grow">{description}</p>
        <hr className="my-2" />
        <h3 className="pb-3">
          Sponsored by {/* <Link href={`/participant/${sponsor_id}`}> */}
          {/* <a> */}
          {sponsorName}
          {/* </a> */}
          {/* </Link> */}
        </h3>
      </div>
    </div>
  );
}
