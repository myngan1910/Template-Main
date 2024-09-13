const express = require('express')
const router = express.Router();
const img_proController = require('../../controller/adminController/img_pro.js')


router.get('/img-pro',img_proController.getImg);
router.get('/create-img',img_proController.getCreateImg);
router.post('/createimg',img_proController.postCreateImg);
router.get('/ima/:ID',img_proController.getdetailImg);
router.get('/imgdele/:ID',img_proController.getdeleImg);
router.post('/img/:ID',img_proController.postImg);

module.exports = router;