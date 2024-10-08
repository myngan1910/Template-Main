const express = require('express')
const router = express.Router();
const checkController = require('../../controller/userController/checkout.js')

router.post('/',checkController.getCheck);


module.exports = router;