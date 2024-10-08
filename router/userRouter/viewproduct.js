const express = require('express')
const router = express.Router();
const productController = require('../../controller/userController/product.js')


router.get('/',productController.getviewProduct);
router.get('/page/:ID',productController.getviewProduct);

module.exports = router;
