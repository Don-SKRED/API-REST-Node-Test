const {Sequelize} = require("sequelize");

//connection à la base de données mysql avec sequelize
const sequelize = new Sequelize(
    'test_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
//tester la connection
sequelize.authenticate().then(() => {
     console.log('Connecté à la base de données MySQL!');
}).catch((error) => {
    console.log('Impossible de se connecter, erreur suivante :', error); 
});;


module.exports = sequelize;




