const { DataTypes } = require('sequelize');
const sequelize = require('../config/DataBase');
const Pret = require('./pret');

const Livre = sequelize.define('livre', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName:'livres',
  timestamps: false
});

Livre.hasMany(Pret, { foreignKey: 'livre_id', onDelete: 'CASCADE' });
Pret.belongsTo(Livre, { foreignKey: 'livre_id' });

module.exports = Livre;

