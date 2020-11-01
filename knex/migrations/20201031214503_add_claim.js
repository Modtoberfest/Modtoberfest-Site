exports.up = function (knex) {
    return knex.schema
      .createTable("claims", (t) => {
        t.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        t.uuid("participant_id").notNullable();
        t.unique("participant_id");
        t.foreign("participant_id").references("participant.id");
        t.string("firstName").notNullable();
        t.string("lastName").notNullable();
        t.string("address1").notNullable();
        t.string("address2");
        t.string("city").notNullable();
        t.string("zip").notNullable();
        t.string("state").notNullable();
        t.string("country").notNullable();
        t.string("email").notNullable();

        t.text("feedback");
      });
  };
  
  exports.down = function (knex) {
  };
  