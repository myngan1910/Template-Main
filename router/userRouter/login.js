const express = require('express')
const router = express.Router();

const loginController = require('../../controller/userController/login.js')
const login = require('../../middleware/login.js')


router.get('/',loginController.getLogin);
router.post('/', login.login)

module.exports = router;