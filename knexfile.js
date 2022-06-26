// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URI,
    ssl: {
      rejectUnauthorized: false,
    },
    /* {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    }, */
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    },
    debug: process.env.DEBUG
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URI,
    ssl: {
      rejectUnauthorized: false,
    }
    /* {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    } */
  }

};
