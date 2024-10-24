const UserEntity = require('../models/userEntity');
const User = require('../models/user');
const Entity = require('../models/entity');

//récupéreration de tous les associations
exports.getAllUserEntity = (req, res) => {
    const userEntity = UserEntity.findAll().then((results) => {
        res.status(200).json(
            {
                message: "userEntity recupére",
                data: results
            }
        )
    }).catch((err) => {
        res.status(400).json({
            error: err
        })
    })
}
//création d'une association user-entity
exports.createUserEntity = async (req, res) => {
    const { entityId, userId } = req.body;

    const user = await User.findOne({ where: { id: userId } });
    const entity = await Entity.findOne({ where: { id: entityId } });
    //  verifier que les 2 sont vraies
    // Ajouter l'entité à l'utilisateur (cela crée une entrée dans la table de jonction)
    if (user && entity) {
        await user.addEntity(entity).then;
        res.json("user et entity associés")
    }
    else {
        res.json("user ou l'entity est introuvable")
    }
}

//récupération d'une association par son ID
exports.getOneUserEntity = (req, res) => {
    const userEntity = UserEntity.findByPk(req.params.id).then(
        (result) => {
            res.status(200).json({
                message: "association trouvée",
                data: result
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                erreur: error
            })
        }
    )
}

//suppression d'une association
exports.deleteUserEntity = async(req,res) => {
    const userEntity = await UserEntity.findByPk(req.params.id).then(
        (result) =>{
            result.destroy();
            res.status(200).json({
                message:'association supprimé',

            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                  message: 'association inexistante',
                erreur:error
            });
        }
    );
    }

//mise à jour d'une association
exports.updateUserEntity = async(req,res) => {
    const { entityId, userId } = req.body;

    const user = await User.findOne({ where: { id: userId } });
    const entity = await Entity.findOne({ where: { id: entityId } });
    //  verifier que les 2 sont vraies
    // Ajouter l'entité à l'utilisateur (cela crée une entrée dans la table de jonction)
   
    const userEntity = UserEntity.findByPk(req.params.id);
    if(userEntity){
        if (user && entity) {
            userEntity.entityId = entity;
            userEntity.userId = user;
            await user.addEntity(entity).then;
            res.json("user et entity mises à jour et associés")
        }
        else {
            res.json("user ou entity est introuvable")
        }
    }
}
