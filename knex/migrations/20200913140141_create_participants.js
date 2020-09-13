exports.up = function (knex) {
  return knex.schema.createTable("participant", (t) => {
    t.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    t.integer("account_id").notNullable();
    t.foreign("account_id").references("accounts.id");
    t.boolean("admin").defaultTo(false).notNullable();
    t.string("discord_user");
    t.string("github_id").notNullable();
  });
};

exports.down = function (knex) {
  //TODO: drop table
};
