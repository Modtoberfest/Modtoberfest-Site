exports.up = function (knex, Promise) {
  return knex.schema.alterTable("sponsor", (t) => {
    t.string("github_user").nullable().alter();
  });
};
exports.down = function (knex) {};
