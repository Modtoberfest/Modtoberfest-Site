exports.up = function (knex) {
  return knex.schema.createTable("sponsor", (t) => {
    t.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    t.string("name").notNullable();
    t.string("image_url");
    t.string("summary");
    t.string("website_url");
    t.string("github_user").notNullable();
    t.string("twitter_handle");
  });
};

exports.down = function (knex) {
  //   return knex.schema.dropTable("sponsor");
};
