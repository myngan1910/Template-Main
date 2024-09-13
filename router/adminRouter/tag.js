const express = require('express')
const router = express.Router();
const tagController = require('../../controller/adminController/tag.js')


router.get('/tag',tagController.getTag);
router.get('/create-tag',tagController.getCreateTag);
router.post('/createtag', tagController.postCreateTag);
router.get('/tags/:ID',tagController.getdetailTag);
router.get('/tagdele/:ID',tagController.getdeleTag);
router.post('/tagg/:ID',tagController.postTag);
module.exports = router;