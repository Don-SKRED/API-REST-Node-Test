const express = require('express');
const sequelize = require('./database');
const User = require('./models/user');
const Entity = require('./models/entity');
const UserEntity = require('./models/userEntity');
const routerEntity = require('./routes/entity');
const routerUser = require('./routes/user');
const routerUserEntity = require('./routes/userEntity');

//synchronisation des modèles définis avec la base de données
sequelize.sync().then(() =>{
    console.log("tables crées");
}).catch((err) => {
    console.error("tables non crées", err);
})

const app = express();

//Middleware pour permettre l'accès à l'API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Pour gérer les requêtes post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//les routes globales de chaque entités
app.use('/users', routerUser);
app.use('/entities',routerEntity);
app.use('/user-entities',routerUserEntity);
module.exports = app;