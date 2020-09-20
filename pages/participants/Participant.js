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
      <div className="h-full border-warm-l-orange border-2 p-2 rounded-lg">
        <h2 className="font-bold text-warm-l-orange tracking-wide text-center">
          {name}
        </h2>
        {imageUrl && (
          <div>
            <img src={imageUrl} className="max-h-48 px-10 py-5" />
          </div>
        )}
        <p>{summary}</p>
        <div className="flex my-3">
          <img
            src="/icons/github-logo.png"
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
            <img src="/icons/hand-cursor.png" width="25" className="mr-2" />
            <a className="underline" href={websiteUrl} target="_blank">
              {websiteUrl}
            </a>
          </div>
        )}
        {twitterHandle && (
          <div className="flex flex-no-wrap my-3">
            <img src="/icons/twitter-logo.png" width="25" className="mr-2" />
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
