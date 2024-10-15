const express = require('express')
const router = express.Router();
const productController = require('../../controller/userController/product.js')
const login = require('../../middleware/view/login.js')
const review = require('../../middleware/view/review.js')
const reviewModel = require('../../controller/userController/product.js');

router.get('/:ID',productController.getProduct);

router.post('/review/:ID',login.requireLogin, review.requireReview, reviewModel.postRev)
router.post('/cart/:ID',login.requireLogin, productController.createCart )
router.get('/delete/:ID', productController.remove)
router.get('/like/:ID',login.requireLogin, productController.createlikeProduct)

module.exports = router;
