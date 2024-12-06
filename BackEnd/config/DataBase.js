const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Bibliotheque', 'user', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
