const express = require('express')
const router = express.Router();
const colorController = require('../../controller/adminController/color')


router.get('/',colorController.getColor);
router.get('/create-color',colorController.getCreateColor);
router.post('/createcolor', colorController.postCreateColor);
router.get('/co/:ID',colorController.getdetailColor);
router.get('/colordele/:ID',colorController.getdeleColor);
router.post('/color/:ID',colorController.postColor);

module.exports = router;