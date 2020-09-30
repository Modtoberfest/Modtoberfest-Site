exports.up = function (knex) {
  return knex.schema
    .createTable("pullrequest", (t) => {
      t.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
      t.uuid("repository_id").notNullable();
      t.foreign("repository_id").references("repository.id");
      t.string("github_id").notNullable();
      t.string("author_github_id").notNullable();
      t.string("url").notNullable();
      t.datetime("created_at").notNullable();
    })
    .createTable("contribution", (t) => {
      t.uuid("pr_id").notNullable();
      t.foreign("pr_id").references("pullrequest.id");
      t.uuid("participant_id").notNullable();
      t.foreign("participant_id").references("participant.id");
      t.boolean("valid").defaultTo(true);
      t.primary(["pr_id", "participant_id"]);
    });
};

exports.down = function (knex) {
  //   return knex.schema.dropTable("pullrequest");
};
