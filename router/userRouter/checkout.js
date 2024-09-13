const express = require('express')
const router = express.Router();
const checkController = require('../../controller/userController/checkout.js')

router.get('/',checkController.getCheck);
module.exports = router;