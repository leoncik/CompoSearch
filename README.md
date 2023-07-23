# CompoSearch

## Presentation

### About this project

This is a personal project I have made to learn more about Docker and continue to explore Angular. It is for now a simple search app where you can search for a composer but I plan to add more features.

## How to use

### Launch and stop the project

Make sure that the Docker daemon is running.

Use `sudo docker-compose up` to launch the project.

The front-end will be available on: http://localhost:4200/

Use `sudo docker-compose down` to launch the project.

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
