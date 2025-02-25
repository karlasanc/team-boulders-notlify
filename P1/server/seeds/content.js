const contentData = require("../seed_data/content.json");

exports.seed = async function (knex) {
  await knex("content").del();
  await knex("content").insert(contentData);
};
