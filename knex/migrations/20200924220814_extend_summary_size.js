exports.up = function (knex) {
  return knex.schema.alterTable("sponsor", (t) => {
    t.text("summary").alter();
  });
};

exports.down = function (knex) {};
