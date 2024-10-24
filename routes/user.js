const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();


router.get('/',userController.getAllUser);
router.post('/',userController.createUser);

router.get('/:id',userController.getOneUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;
