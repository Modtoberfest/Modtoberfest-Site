import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/shared/PageTitle";
import { fetchJson } from "../lib/api";
import ErrorPage from "../components/ErrorPage";
import classNames from "classnames";

function Stat({
  value,
  text,
  ltr = true,
  alignLeft = true,
  alignRight = false,
}) {
  return (
    <div
      className={classNames("flex items-center text-4xl", {
        "justify-end": alignRight,
        "justify-start": alignLeft,
      })}
    >
      {!ltr && <div>{text}</div>}
      <div className="mx-5 text-6xl font-bold">{value}</div>
      {ltr && <div>{text}</div>}
    </div>
  );
}

export default function Stats({ error, stats }) {
  if (error) {
    return <ErrorPage message={error.message} />;
  }

  return (
    <Layout
      title="Statistics"
      description="Modtoberfest in numbers"
      canonical="/stats"
    >
      <PageTitle>Modtoberfest in numbers</PageTitle>
      <div>
        <Stat value={stats.participantCount} text={"signed up"} />
        <Stat
          value={stats.contributionCount}
          text={"pull requests"}
          alignRight
        />
        <Stat value={stats.completed} text="completed challenge" />
      </div>
      {/* <hr className="my-10" /> */}
      <div>
        <h1 className="mt-10 mb-5">Participants</h1>
        <table className="w-full">
          <thead>
            <tr className="text-2xl">
              <th className="text-left md:pl-10">Github name</th>
              <th className="text-right md:pr-10">Pull requests</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {stats.countByUser.map((user, index) => {
              return (
                <tr className="border-t">
                  <td className="py-2 md:pl-10"><a href={user.html_url} target="_blank">{user.name}</a></td>
                  <td className="flex items-center justify-end md:pr-10">
                    {user.count >= 4 && (
                      <span className="mr-2">
                        {index === 0 ? <>👑</> : <>🎉</>}
                      </span>
                    )}
                    {user.count}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await fetchJson(`stats`);

    if (data.error) {
      return {
        props: {
          error: { message: "There was an error fetching statistics." },
        },
      };
    }

    const {
      repoCount,
      participantCount,
      contributionCount,
      countByUser,
      activeCount,
      completed,
    } = data;

    return {
      props: {
        stats: {
          repoCount,
          participantCount,
          contributionCount,
          countByUser,
          activeCount,
          completed,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        error: { message: "There was an error fetching statistics." },
      },
    };
  }
}
