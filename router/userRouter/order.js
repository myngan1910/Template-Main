const express = require('express')
const router = express.Router();
const orderController = require('../../controller/userController/order.js')

router.get('/', orderController.getOrder);

module.exports = router;
