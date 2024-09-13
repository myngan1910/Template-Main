const express = require('express')
const router = express.Router();
const productController = require('../../controller/userController/product')

router.get('/',productController.getProduct);

module.exports = router;
