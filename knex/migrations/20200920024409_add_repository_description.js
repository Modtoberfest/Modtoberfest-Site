exports.up = function (knex) {
  return knex.schema.alterTable("repository", (t) => {
    t.string("description");
  });
};

exports.down = function (knex) {};
