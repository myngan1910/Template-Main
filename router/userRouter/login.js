const express = require('express')
const router = express.Router();

const loginController = require('../../controller/userController/login.js')


router.get('/',loginController.getLogin);

module.exports = router;