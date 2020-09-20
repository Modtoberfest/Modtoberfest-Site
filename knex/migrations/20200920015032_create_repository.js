exports.up = function (knex) {
  return knex.schema.createTable("repository", (t) => {
    t.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
    t.string("repository_id").notNullable();
    t.string("url").notNullable();
    t.string("name").notNullable();
    t.uuid("sponsor_id").notNullable();
    t.foreign("sponsor_id").references("sponsor.id");
  });
};

exports.down = function (knex) {
  //   return knex.schema.dropTable("repository");
};
