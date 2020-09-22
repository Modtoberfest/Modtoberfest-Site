exports.up = function (knex) {
  return knex.schema.alterTable("sponsor", (t) => {
    t.string("subreddit");
    t.string("discord");
  });
};

exports.down = function (knex) {};
