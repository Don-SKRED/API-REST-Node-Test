const express = require('express');
const entityController = require('../controllers/entity');
const router = express.Router();

//les routes pour le CRUD de l'entité entity
router.get('/',entityController.getAllEntity);
router.post('/',entityController.createEntity);

router.get('/:id',entityController.getOneEntity);
router.put('/:id',entityController.updateEntity);
router.delete('/:id',entityController.deleteEntity);

module.exports = router;
