# Article API

The database schema and the api endpoints are described in the [REQUERMENTS.md](REQUIREMENTS.md) file.

## Running instructions

### Installing dependencies

To run the backend, you will need to install the dependencies:

to install dependencies:

```bash
yarn 
```

### setting up the database

* create the Project database:

```sql
CREATE DATABASE article;
```

* to make the database looks like the schema in the migration file:

```bash
yarn global add db-migrate
db-migrate up
```

### Setting up env variables

you must make an `.env` file in the root of the project providing the information like in [.env.example](.env.example).

## Statring the backend

to run the backend:

```bash
yarn watch
```

### Running ports

The server will start on port 3000.

### EndPoints

all endpoints are described in the [REQUIREMENTS.md](REQUIREMENTS.md) file.

## Authentication

tokens are generated using the [JWT](https://jwt.io/) library.

to provide authentication to the backend you must path the token to the header of the request as:

 ``` json
 {
 "Authorization": "Bearer <token>"
 }
 ```

## Testing instructions

to test the backend:

```bash
yarn test
```
