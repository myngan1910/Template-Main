const express = require('express')
const router = express.Router();
const sizeController = require('../../controller/adminController/size.js')
const requireName = require('../../middleware/admin/size.js')



router.get('/size',sizeController.getSize);
router.get('/create-size',sizeController.getCreateSize);
router.post('/createsize',requireName.checkName, sizeController.postCreateSize);
router.get('/si/:ID',sizeController.getdetailSize);
router.get('/sizedele/:ID',sizeController.getdeleSize);
router.post('/size/:ID',sizeController.postSize);

module.exports = router;
