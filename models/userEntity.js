const User = require('./user');
const Entity = require('./entity');
const sequelize = require('../database');
const { DataTypes } = require('sequelize')

//définir le model UserEntity qui est une table qui joint user et entity
//Donc on fait réference à user et entity
const UserEntity = sequelize.define('userEntity', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  entityId: {
    type: DataTypes.INTEGER,
    references: {
      model: Entity,
      key: 'id',
    },
  },
},{
  createdAt:false,
  updatedAt:false,
});

//pour dire que user et entity ont une relation 
//un utilisateur peut avoir un ou plusieurs entités et un entités peut avoir un ou plusieurs utilisateurs
User.belongsToMany(Entity, { through: UserEntity, foreignKey: 'userId' });
Entity.belongsToMany(User, { through: UserEntity, foreignKey: 'entityId' });

module.exports = UserEntity;
