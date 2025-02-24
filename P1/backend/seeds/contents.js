const contentsData = require("../seed_data/contents.json");

exports.seed = async function (knex) {
  await knex("contents").del();
  await knex("contents").insert(contentsData);
};
