// Create Content Table
exports.up = function (knex) {
  return knex.schema.createTable("content", (table) => {
    table.integer("id").unsigned().primary();
    table.string("title", 255).notNullable();
    table.integer("year", 4).notNullable();
    table.enu("category", ["Movie", "TV Series"], { useNative: true, enumName: "category_enum" }).notNullable();
    table.enu("rating", ["18+", "E", "PG"], { useNative: true, enumName: "rating_enum" }).notNullable();
    table.boolean("is_bookmarked").defaultTo(false);
    table.boolean("is_trending").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("content");
};
