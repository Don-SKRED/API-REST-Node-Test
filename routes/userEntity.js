const express = require('express');
const userEntityController = require('../controllers/userEntity');
const router = express.Router();


router.get('/',userEntityController.getAllUserEntity);
router.post('/',userEntityController.createUserEntity);

router.get('/:id',userEntityController.getOneUserEntity);
router.delete('/:id',userEntityController.deleteUserEntity);
router.put('/:id',userEntityController.updateUserEntity);


module.exports = router;
