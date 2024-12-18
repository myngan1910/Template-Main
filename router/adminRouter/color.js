const express = require('express')
const router = express.Router();
const colorController = require('../../controller/adminController/color')
const requireColor = require('../../middleware/admin/color.js')


router.get('/color',colorController.getColor);
router.get('/create-color',colorController.getCreateColor);
router.post('/createcolor',requireColor.checkName, colorController.postCreateColor);
router.get('/co/:ID',colorController.getdetailColor);
router.get('/colordele/:ID',colorController.getdeleColor);
router.post('/color/:ID',colorController.postColor);

module.exports = router;