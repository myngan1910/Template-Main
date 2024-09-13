const express = require('express')
const router = express.Router();
const reviewController = require('../../controller/adminController/review.js')


router.get('/review',reviewController.getRev);
router.get('/create-rev',reviewController.getCreateRev);
router.post('/createrev',reviewController.postCreateRev);
router.get('/rev/:ID',reviewController.getdetailRev);
router.get('/revdele/:ID',reviewController.getdeleRev);
router.post('/rev/:ID',reviewController.postRev);

module.exports = router;