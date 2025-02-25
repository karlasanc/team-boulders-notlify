Local Development Setup

1. Ensure you create a .env file in your backend folder to load your environment variables
2. run your knex migrations and seed the database.
   - cd backend
   - npx knex migrate:latest
   - npx knex seed:run
