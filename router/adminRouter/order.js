const express = require('express')
const router = express.Router();
const orderController = require('../../controller/adminController/order.js')



router.get('/',orderController.getOrder);
router.get('/create-order',orderController.getCreateOrder);
router.post('/createod',orderController.postCreateOrder);
router.get('/od/:ID',orderController.getdetailOrder);
router.get('/orderdele/:ID',orderController.getdeleOrder);
router.post('/od/:ID',orderController.postOrder);

module.exports = router;