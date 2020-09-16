const fs = require("fs");

exports.up = function (knex) {
  const nextAuthSchema = fs.readFileSync("auth-schema.sql").toString();
  return knex.raw(nextAuthSchema);
};

exports.down = function (knex) {};
