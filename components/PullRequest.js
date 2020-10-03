import React from "react";

export default function PullRequest({ repositoryName, sponsorName, url }) {
  return (
    <div className="w-full p-2 lg:p-5">
      <div className="flex flex-col h-full p-5 border-2 border-warm-l-orange rounded-lg">
        <div>
          <h2 className="my-2 font-bold text-warm-l-orange tracking-wide">
            <a
              href={url.match(/https:\/\/github\.com\/.*\/(?=pull\/\d+)/)[0]}
              target="_blank"
            >
              {sponsorName + "/" + repositoryName}
            </a>
          </h2>
          <div className="flex">
            <div className="w-full">
              <img
                src="/icons/github-logo-128.png"
                width="25"
                className="mr-2"
                alt="github"
                style={{ display: "inline" }}
              />
              <a className="font-bold" href={url} target="_blank">
                {"#" + url.replace(/https:\/\/github\.com\/.*\/(?=\d+)/, "")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
