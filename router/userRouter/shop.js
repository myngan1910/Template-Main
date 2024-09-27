const express = require('express')
const router = express.Router();
const  shopController = require('../../controller/userController/shop.js')
router.get('/', shopController.getEShop);
router.get('/user', shopController.getEShop);
router.get('/search', shopController.getSearch);


module.exports = router;
