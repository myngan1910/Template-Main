const express = require('express')
const router = express.Router();
const productController = require('../../controller/adminController/product.js')


router.get('/',productController.getProduct);
router.get('/create-pro',productController.getCreateProduct);
router.post('/createdpro', productController.postCreateProduct);
router.get('/pro/:ID',productController.getdetailProduct);
router.get('/prodele/:ID',productController.getdeleProduct);
router.post('/pro/:ID',productController.postProduct);
module.exports = router;