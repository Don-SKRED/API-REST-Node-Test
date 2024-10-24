const Entity = require('../models/entity');

//methode pour la création d'une entity
exports.createEntity = async (req, res) => {
    //recupération des valeurs entréés par l'utilisateur dans la variable entityBody
   const entityBody = {
        name: req.body.name,
        description:req.body.description,
        siret:req.body.siret,
        keyLicence:req.body.keyLicence,
        website:req.body.website,
    }
    //création d'une nouvelle entity
    const newEntity = await Entity.create(entityBody).then(
        () => {
            console.log('entité enregistrée');
            res.status(201).json({
                message: 'entité enregistrée'
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

//methode pour la récuperation de toutes les entity
exports.getAllEntity = async(req,res) => {
    const entity = await Entity.findAll().then(
        (entities) =>{
            res.status(200).json({
                message:'entités recupérés',
                data: entities
            })
        }
    ).catch(
        (error) => {     
            res.status(400).json({
                  message: 'entités non recupérés',
                  erreur:error
            });
        }
    );
    }

//methode pour la récupération d'une entity par son ID
exports.getOneEntity = async(req,res) => {
    const entity = await Entity.findByPk(req.params.id).then(
        (result) =>{
            res.status(200).json({
                message:'entity recupéré',
                data: result
            })
        }
    ).catch(
        (error) => {
           
            res.status(400).json({
                  message: 'entity inexistant',
                erreur:error
            });
        }
    );
    }

//methode pour la mise à jour d'une entity
exports.updateEntity = async(req,res) => {
    const {
        name,
        description,
        siret,
        keyLicence,
        website,
    } = req.body
        const entity = await Entity.findByPk(req.params.id);
        if(entity){
            entity.name = name,
            entity.description = description,
            entity.siret = siret,
            entity.keyLicence = keyLicence,
            entity.website = website,
            await entity.save();
            res.status(200).json({
                message: 'entité mise à jour'
            })
        }
        else{
            res.status(400).json({
                erreur: 'entité inexistante'
            })
        }
}
//méthode pour la suppression d'une entity par son ID
exports.deleteEntity = async(req,res) => {
    const entity = await Entity.findByPk(req.params.id).then(
        (result) =>{
            result.destroy();
            res.status(200).json({
                message:'entité supprimée',

            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                  message: 'entité inexistante',
                erreur:error
            });
        }
    );
    }

    