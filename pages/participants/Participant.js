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
    <div className="w-1/2 p-2 sponsor-card">
      <div className="h-full">
        <h3 className="font-bold text-warm-l-orange tracking-wider">{name}</h3>
        <p>{summary}</p>
        <div className="flex my-3">
          <img src="github-logo.png" width="25" height="25" className="mr-2" />
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
            <img src="hand-cursor.png" width="25" className="mr-2" />
            <a className="underline" href={websiteUrl} target="_blank">
              {websiteUrl}
            </a>
          </div>
        )}
        {twitterHandle && (
          <div className="flex flex-no-wrap my-3">
            <img src="twitter-logo.png" width="25" className="mr-2" />
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
  );
}
