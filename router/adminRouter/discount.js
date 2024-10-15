const express = require('express')
const router = express.Router();
const disController = require('../../controller/adminController/discount.js')
const requireName = require('../../middleware/admin/disscount.js')



router.get('/discount',disController.getDiscount);
router.get('/create-dis',disController.getCreateDiscount);
router.post('/createdis',requireName.checkName, disController.postCreateDiscount);
router.get('/diss/:ID',disController.getdetailDiscount);
router.get('/disdele/:ID',disController.getdeleDiscount);
router.post('/dis/:ID',disController.postDiscount);

module.exports = router;