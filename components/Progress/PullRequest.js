import React from "react";

export default function PullRequest({ repositoryName, sponsorName, url }) {
  return (
    <div className="flex flex-wrap items-center p-2 lg:p-5">
      <div className="flex-grow my-2">
        <h2 className="text-left font-bold text-warm-l-orange tracking-wide ">
          <a
            href={url.match(/https:\/\/github\.com\/.*\/(?=pull\/\d+)/)[0]}
            target="_blank"
          >
            {repositoryName.replace("https://github.com/", "")}
          </a>
        </h2>
        <div>
          sponsored by <span className="font-bold">{sponsorName}</span>
        </div>
      </div>
      <div>
        <a
          className="font-bold"
          href={url}
          target="_blank"
          className="flex items-center flex-wrap"
        >
          <img
            src="/icons/github-logo-128.png"
            width="25"
            className="mr-2"
            alt="github"
            style={{ display: "inline" }}
          />
          {"#" + url.replace(/https:\/\/github\.com\/.*\/(?=\d+)/, "")}
        </a>
      </div>
    </div>
  );
}
