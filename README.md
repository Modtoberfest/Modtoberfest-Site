# Modtoberfest site

This is the platform used for the Modtoberfest event(s)

## Development

### Dependencies

- NodeJS
- PostgreSQL
- NPM
- A Github account

### Installing for development

1. Create Github OAuth app

   \* Use `http://localhost:3000` as the callback url

   **Do not close the page before the next step! You will need your client secret and token.**

   Follow the steps here: https://docs.github.com/en/developers/apps/creating-an-oauth-app

1. Create .env file

   - Rename the file `.env.example` to `.env`
   - Fill in your github id and secret you got from the previous step
   - Fill in your database information. Usually can stay untouched.

1. Setup database

   - Create database "modtoberfest"
   - Install knex `npm install knex -g`
   - Run migrations `knex migrate:latest`

1. Install dependencies

   ```sh
   npm i
   ```

1. Run the app

   ```console
   npm run dev
   ```

That's it! Visit [http://localhost:3000](http://localhost:3000) to get started!

## Deployment

1. Log into Docker Hub or your docker registery of choice

   See [the login reference page](https://docs.docker.com/engine/reference/commandline/login/)

1. Build and Push the Docker image

   ```sh
       docker build . -t <username>/<name>
       docker push <username>/<name>
   ```

   Or edit [publish.sh](./publish.sh) (or [publish.bat](./publish.bat) on Windows) to fit your username and run the script.

1. Run the container

   There is multiple ways to run the container, you can simply do

   ```sh
       docker run <username>/<name> -p 3000
   ```

   Or you can use more advanced options such as docker-compose, see the [docker-compose.yml](./docker-compose.yml) file for reference.

1. Setup the database

   Follow the steps for the development process except for the migration part.

   1. Copy your `.env` file and rename it `.env.prod`
   1. Fill in the information to your database
   1. Run `migrate-prod.sh (or .bat on windows)`\*

      **Be extremely careful when running migrations in production as it can lead to data loss**

      \* If your database is running on a remote server, you can use a ssh tunnel [more info](https://www.a2hosting.ca/kb/developer-corner/postgresql/remote-postgresql-connections)
