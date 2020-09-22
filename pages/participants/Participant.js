import React from "react";
export default function Participant({
  githubUser,
  id,
  imageUrl,
  name,
  summary,
  twitterHandle,
  websiteUrl,
}) {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 p-2 lg:p-5">
      <div className="h-full p-2 flex flex-col sm:flex-row flex-grow md:border-0 border-b-2 border-warm-l-orange">
        <div className="w-full md:w-1/2">
          <img src={imageUrl || "logo/badge.png"} className="px-5 mb-2" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-warm-l-orange tracking-wide mb-3">
            {name}
          </h2>
          <p>{summary}</p>
          <div className="flex my-3">
            <img
              src="/icons/github-logo-128.png"
              width="25"
              height="25"
              className="mr-2"
            />
            <a
              className="underline"
              href={`https://github.com/${githubUser}`}
              target="_blank"
            >
              {githubUser}
            </a>
          </div>
          {websiteUrl && (
            <div className="my-3 flex flex-no-wrap">
              <img src="/icons/globe-128.png" width="25" className="mr-2" />
              <a className="underline" href={websiteUrl} target="_blank">
                {websiteUrl}
              </a>
            </div>
          )}
          {twitterHandle && (
            <div className="flex flex-no-wrap my-3">
              <img
                src="/icons/twitter-logo-128.png"
                width="25"
                className="mr-2"
              />
              <a
                className="underline"
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
              >
                {twitterHandle}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
