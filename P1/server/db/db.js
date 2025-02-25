// Import Environment Variables
require("dotenv").config();

// Import Knex Configuration
const knex = require("knex");
const knexFile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";

// Connect to DB and Export Connection
module.exports = knex(knexFile[environment]);
