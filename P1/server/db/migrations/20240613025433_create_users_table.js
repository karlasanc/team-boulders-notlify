// Create Users Table
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary().notNullable();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("username", 255).notNullable();
    table.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
