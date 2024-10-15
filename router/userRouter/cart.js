const express = require('express')
const router = express.Router();
const cartController = require('../../controller/userController/cart.js')

router.get('/', cartController.getCartInfor);

module.exports = router;
