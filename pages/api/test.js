const knex = require("../../lib/knex");

export default async (req, res) => {
  const accounts = await knex.from("accounts").select("*");
  console.log(accounts);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "John Doe" }));
};
