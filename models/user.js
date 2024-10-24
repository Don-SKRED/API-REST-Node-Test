const sequelize = require('../database');
const { DataTypes } = require('sequelize');
// Definir le modèle
const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING(80), //varchar(),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING(50),
  },
  language: {
    type: DataTypes.STRING(2),
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  lastLogin: {
    type: DataTypes.DATE,
    defaultValue:DataTypes.NOW
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue:DataTypes.NOW
   
  },},{
    updatedAt:false, //pour enlever cette colonne dans la table entity car elle se crée automatiquement
  
});


module.exports = User;
