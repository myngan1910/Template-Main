const express = require('express')
const router = express.Router();
const  shopController = require('../../controller/userController/shop.js')
router.get('/', shopController.getEShop);


module.exports = router;
