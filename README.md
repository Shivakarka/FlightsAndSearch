# Welcome to Flights Service

## Project Setup

- Clone the project on your local machine.
- Execute `npm install` on the same path as your root directory of the
  downloaded project
- Create a .env in the root directory and the following env variables
  - `PORT=3000`
- Inside the `src/config` folder, create a new file `config.json` and then
  add the following piece of json.

```
{
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
