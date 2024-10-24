const sequelize = require('../database');
const { DataTypes } = require('sequelize');
// Definir le modèle
const Entity = sequelize.define('entity', {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT('long'),
  },
  siret: {
    type: DataTypes.STRING(20),
  },
  KeyLicence: {
    type: DataTypes.STRING(250),
    
  },
  website: {
    type: DataTypes.STRING(100),
   
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue : DataTypes.NOW,
  },},{
    // timestamps:false,
    updatedAt:false, //pour enlever cette colonne dans la table entity car elle se crée automatiquement
  
});



module.exports = Entity;