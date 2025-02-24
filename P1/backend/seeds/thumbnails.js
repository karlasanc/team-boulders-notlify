const thumbnailsData = require("../seed_data/thumbnails.json");

exports.seed = async function (knex) {
  await knex("thumbnails").del();
  await knex("thumbnails").insert(thumbnailsData);
};
