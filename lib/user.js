import knex from "./knex";
export async function getUserIdFromSession(accessToken) {
  const res = await knex("sessions")
    .select("user_id")
    .where("access_token", accessToken)
    .first();
  if (res) {
    return res.user_id;
  }
}

export async function getAccountFromUser(userId) {
  const res = await knex("accounts")
    .select("id", "provider_account_id")
    .where("user_id", userId)
    .first();

  if (res) {
    return { id: res.id, github_id: res.provider_account_id };
  }
}

export async function getAccountFromSession(accessToken) {
  const res = await knex("accounts")
    .select(
      "accounts.user_id",
      "provider_account_id",
      "users.name",
      "participant.id as participant_id"
    )
    .join("sessions", "accounts.user_id", "sessions.user_id")
    .join("users", "accounts.user_id", "users.id")
    .leftJoin("participant", "accounts.id", "participant.account_id")
    .where("sessions.access_token", accessToken)
    .first();

  if (res) {
    return {
      id: res.user_id,
      participant_id: res.participant_id,
      github_id: res.provider_account_id,
      name: res.name,
    };
  }
}
