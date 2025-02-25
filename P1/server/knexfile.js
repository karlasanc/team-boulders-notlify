// Import Environment Variables
require("dotenv").config();

// Configure Knex to use MySQL
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: process.env.DB_CHARSET,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
