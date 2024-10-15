const express = require('express')
const router = express.Router();
const productController = require('../../controller/userController/product.js')
const login = require('../../middleware/view/login.js')



router.get('/',login.requireLogin, productController.getlikeProduct)

module.exports = router;