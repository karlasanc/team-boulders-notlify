// Create Thumbnails Table
export function up(knex) {
  return knex.schema.createTable("thumbnails", (table) => {
    table.increments("id").primary();
    table.integer("content_id").unsigned().references("id").inTable("content").onDelete("CASCADE");
    table.enu("type", ["regular", "trending"], { useNative: true, enumName: "thumbnail_type_enum" }).notNullable(); // "regular" or "trending"
    table.string("small_url").notNullable();
    table.string("medium_url").nullable();
    table.string("large_url").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable("thumbnails");
}
