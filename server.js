const app = require('./app');

//création du serveur
const port = 3000
app.listen(port, () => {
    console.log("le serveur marche sur le port ", port)
})