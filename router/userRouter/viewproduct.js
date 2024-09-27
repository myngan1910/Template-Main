const express = require('express')
const router = express.Router();
const productController = require('../../controller/userController/product.js')


router.get('/page/',productController.getviewProduct);


module.exports = router;
