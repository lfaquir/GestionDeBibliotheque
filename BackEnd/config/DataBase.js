const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Bibliotheque', 'postgres', 'udev2', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;