const express = require('express')
const router = express.Router();
const cateController = require('../../controller/adminController/cate.js')
const requireName = require('../../middleware/admin/cate.js')


router.get('/categories',cateController.getCate);
router.get('/create-cate',cateController.getCreateCate);
router.post('/createcate',requireName.checkName, cateController.postCreateCate);
router.get('/ca/:ID',cateController.getdetailCate);
router.get('/catedele/:ID',cateController.getdeleCate);
router.post('/catego/:ID', cateController.postCate);
 module.exports = router;