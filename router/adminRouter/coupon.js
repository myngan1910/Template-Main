const express = require('express')
const router = express.Router();
const couponController = require('../../controller/adminController/coupon.js')


router.get('/coupon',couponController.getCoupon);
router.get('/create-cou',couponController.getCreateCoupon);
router.post('/createcou', couponController.postCreateCoupon);
router.get('/cou/:ID',couponController.getdetailCoupon);
router.get('/coudele/:ID',couponController.getdeleCoupon);
router.post('/coup/:ID', couponController.postCoupon);
router.get('/coupon/donate', couponController.getDonate)
router.post('/coupon/do', couponController.postDonate)
 module.exports = router;