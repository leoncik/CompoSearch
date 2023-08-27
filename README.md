# CompoSearch

A full-stack search app made with Angular and Express.

## Table of contents

-   [Presentation](#presentation)
    -   [About this project](#about-this-project)
    -   [Features and tech stack](#features-and-tech-stack)
-   [How to use](#how-to-use)
    -   [Launch and stop the project](#launch-and-stop-the-project)
      - [Tests scripts (client)](#tests-scripts-client)
    -   [Use the pgadmin panel](#use-the-pgadmin-panel)
        - [Login and create a server](#login-and-create-a-server)
        - [Run queries](#run-queries)

## Presentation

### About this project

This is a personal project I have made to learn more about Docker and continue to explore Angular. It is for now a simple search app where you can search for a composer but I plan to add more features.

### Features and tech stack

- Fully containerized app with [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).
- Client side made with [Angular](https://angular.io/)
- Server side made with [Express](https://expressjs.com/) (with [TypeScript](https://www.typescriptlang.org/)) to build the API and [PostgreSQL](https://www.postgresql.org/) for the database.
- E2E tests on the client side made with [Playwright](https://playwright.dev/).
- CI implementation (to run the tests on each pull request) made with [GitHub Actions](https://github.com/features/actions).
- Pre-commit hooks to lint and format the code for the client and the server made with [Husky](https://typicode.github.io/husky/), [lint-staged](https://www.npmjs.com/package/lint-staged), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## How to use

### Launch and stop the project

Make sure that the Docker daemon is running.

Use `sudo docker-compose up` to launch the project.

The front-end will be available on: http://localhost:4200/

Use `sudo docker-compose down` to launch the project.

### Tests scripts (client)

To run the E2E tests for the client, first make sure that you are in the client directory:

```sh
  cd client
  ```

Then you can run this command to launch the tests with [UI Mode](https://playwright.dev/docs/test-ui-mode):

```sh
  pnpm exec playwright test --ui
  ```


Visit https://playwright.dev/docs/test-cli for more information about the most common options available in the command line.

### Use the pgadmin panel

#### Login and create a server

- Make sure that the project is running.
- The pgadmin panel will be available on: http://localhost:16543/
- Enter the credentials registered in `docker-compose.yaml`:
  - email: `admin@example.com`
  - password: `password123`
- If this is your first login, click on: `Object` > `Register` > `Server...`
- Give a name to your server (you can choose any name).
- Click on the `Connection` tab and use the values written in `docker-compose.yaml`:
  - Host: `database`
  - Port: `5432`
  - Username: `admin`
  - Password `password1234`

#### Run queries

- Make sure that the project is running and log in to your pgadmin panel.
- Click on your server and write the database password (`password1234`) to connect.
- Navigate to your table: `Databases` > `compo_search_database` > `Schemas` > `public` > `Tables` > `table_name`.
- Right-click on your table name and select: `Query Tool`.
- Have fun with the query tool!
