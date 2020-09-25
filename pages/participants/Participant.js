import React from "react";
import { removeProtocol } from "../../common/format";

export default function Participant({
  githubUser,
  id,
  subreddit,
  imageUrl,
  name,
  summary,
  twitterHandle,
  discord,
  websiteUrl,
}) {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 p-2 lg:p-5">
      <div className="h-full p-2 flex flex-col sm:flex-row flex-grow md:border-0 border-b-2 border-warm-l-orange">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={imageUrl || "logo/badge.png"} className="px-5 mb-2" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-warm-l-orange tracking-wide mb-3">
            {name}
          </h2>
          <p>{summary}</p>
          {discord && (
            <div className="my-3 flex flex-no-wrap">
              <div>
                <img src="/icons/discord.png" width="25" className="mr-2" />
              </div>
              <a href={discord} target="_blank">
                {removeProtocol(discord)}
              </a>
            </div>
          )}
          {githubUser && (
            <div className="flex my-3">
              <div>
                <img
                  src="/icons/github-logo-128.png"
                  width="25"
                  className="mr-2"
                />
              </div>
              <a
                style={{ overflowWrap: "anywhere" }}
                href={`https://github.com/${githubUser}`}
                target="_blank"
              >
                {githubUser}
              </a>
            </div>
          )}
          {subreddit && (
            <div className="my-3 flex flex-no-wrap">
              <div>
                <img src="/icons/reddit.png" width="25" className="mr-2" />
              </div>
              <a href={`https://reddit.com/r/${subreddit}`} target="_blank">
                r/{subreddit}
              </a>
            </div>
          )}
          {websiteUrl && (
            <div className="my-3 flex flex-no-wrap">
              <div>
                <img src="/icons/globe-128.png" width="25" className="mr-2" />
              </div>
              <a href={websiteUrl} target="_blank">
                {removeProtocol(websiteUrl)}
              </a>
            </div>
          )}
          {twitterHandle && (
            <div className="flex flex-no-wrap my-3">
              <div>
                <img
                  src="/icons/twitter-logo-128.png"
                  width="25"
                  className="mr-2"
                />
              </div>
              <a href={`https://twitter.com/${twitterHandle}`} target="_blank">
                {twitterHandle}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
