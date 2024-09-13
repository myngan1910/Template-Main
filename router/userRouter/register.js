const express = require('express')
const router = express.Router();

const registerController = require('../../controller/userController/register.js')
router.get('/',registerController.getRegister);
router.post('/', registerController.postRegister)

module.exports = router;
