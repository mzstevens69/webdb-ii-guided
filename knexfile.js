// Update with your config settings.
// this file contains instructions knex needs to connect to the database
// Each key on the exported object has the configuration for a database environment
//(dev, production, testing, etc.)

// the knex cli will use the configuration on this file to find the DB
//the knex cli will use the "development" environment by default, but we can override that behavior
module.exports = {
// teaches knex to connect to the development database
  development: {
    client: 'sqlite3', // DB driver
    useNullasDefault: true, // only needed when using SQLIte3
    connection: {
      filename: './data/produce.db3' // where is the database file
    },
    migrations: {
      directory: "./data/migrations" //will be created automatically
    },
    seeds: {
      directory: "./data/seeds" // also created automatically
    }
  }
// how to connect to the staging (testing ) env


};
