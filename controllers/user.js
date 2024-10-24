const User = require('../models/user')

// //methode pour la création d'un Utilisateur
exports.createUser = async (req, res) => {
    //recupération des valeurs entréés par l'utilisateur dans la variable userBody
   const userBody = {
        name: req.body.name,
        firstName:req.body.firstName,
        language:req.body.language,
        email:req.body.email,
        password:req.body.password,
    }
    //création d'un utilisateur 
    const user = await User.create(userBody).then(
        () => {
            console.log('Utilisateur enregistrée');
            res.status(201).json({
                message: 'Utilisateur enregistrée'
            });
        }
    ).catch(
        (err) => {
            console.log(err);
            res.status(400).json({
                error:err
            });
        }
    );
  
}

//methode pour la récuperation de toutes les utilisateurs
exports.getAllUser = async(req,res) => {
    const user = await User.findAll().then(
        (users) =>{
            res.status(200).json({
                message:'utilisateurs recupérés',
                data: users
            })
        }
    ).catch(
        (error) => {     
            res.status(400).json({
                  message: 'utilisateurs non recupérés',
                  erreur:error
            });
        }
    );
    }

//methode pour la récupération d'un utilisateur par son ID
exports.getOneUser = async(req,res) => {
    const user = await User.findByPk(req.params.id).then(
        (result) =>{
            res.status(200).json({
                message:'utilisateur recupéré',
                data: result
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                  message: 'utilisateur inexistant',
                erreur:error
            });
        }
    );
    }

//methode pour la mise à jour d'un utilisateur
exports.updateUser = async(req,res) => {
    const {
        name,
        firstName,
        language,
        email,
        password,
    } = req.body
        const user = await User.findByPk(req.params.id);
        if(user){
            user.name = name,
            user.firstName = firstName,
            user.language = language,
            user.email = email,
            user.password = password,
            await user.save();
            res.status(200).json({
                message: 'utilisateur mis à jour'
            })
        }
        else{
            res.status(400).json({
                erreur: 'utilisateur inexistant'
            })
        }
}
//méthode pour la suppression d'un utilisateur par son ID
exports.deleteUser = async(req,res) => {
    const user = await User.findByPk(req.params.id).then(
        (result) =>{
            result.destroy();
            res.status(200).json({
                message:'utilisateur supprimé',

            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                  message: 'utilisateur inexistante',
                erreur:error
            });
        }
    );
    }

    