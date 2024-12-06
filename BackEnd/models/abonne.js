const { DataTypes } = require('sequelize');
const sequelize = require('../config/DataBase');
const Pret = require('./pret');

const Abonne = sequelize.define('abonne', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName:'abonnes',
  timestamps: false
});

Abonne.hasMany(Pret, { foreignKey: 'abonne_id', onDelete: 'CASCADE' });
Pret.belongsTo(Abonne, { foreignKey: 'abonne_id' });

module.exports = Abonne;
