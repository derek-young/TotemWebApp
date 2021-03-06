'use strict'
const Sequelize = require('sequelize');
const dbconfig = require('./dbconfig');

const sequelize = new Sequelize(dbconfig.DB_NAME, dbconfig.ROLE, dbconfig.PW, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
