import { fetchJson } from "../../lib/api";
import { getSession } from "next-auth/client";
import { getAccountFromSession } from "../../lib/user";
import knex from "../../lib/knex";

export default async (req, res) => {
  const session = await getSession({ req });

  if (req.method === "POST") {
    if (session) {
      const apiRes = await fetchJson("claim", {
        method: "POST",
        body: req.body,
        headers: {
          "x-session-token": session.accessToken,
          "Content-Type": "application/json"
        },
      });
      res.json(apiRes);
    }
  } else if(req.method === "GET") {
      const account = await getAccountFromSession(session.accessToken);
      const claim = await knex.table("claims").where("participant_id", account.participant_id).first();
      if(claim) {
          res.json({ "id": claim.id });
      } else {
          res.json({ id: null });
      }
  }
};
