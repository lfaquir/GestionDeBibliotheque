const { DataTypes } = require('sequelize');
const sequelize = require('../config/DataBase');

const Pret = sequelize.define('pret', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  livre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'livres',
      key: 'id'
    }
  },
  abonne_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'abonnes',
      key: 'id'
    }
  }
}
,{
  tableName:'prets',
  timestamps: false
});
module.exports = Pret;


