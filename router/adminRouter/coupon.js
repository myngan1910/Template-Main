const express = require('express')
const router = express.Router();
const couponController = require('../../controller/adminController/coupon.js')


router.get('/coupon',couponController.getCoupon);
router.get('/create-cou',couponController.getCreateCoupon);
router.post('/createcou', couponController.postCreateCoupon);
router.get('/cou/:ID',couponController.getdetailCoupon);
router.get('/coudele/:ID',couponController.getdeleCoupon);
router.post('/coup/:ID', couponController.postCoupon);
router.get('/coupon/activate/:ID', couponController.getActivate)
router.get('/coupon/deactivate/:ID', couponController.getDeactivate)
 module.exports = router;