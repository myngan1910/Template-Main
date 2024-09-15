const express = require('express')
const router = express.Router();
const commentController = require('../../controller/adminController/comment.js')

router.get('/comment',commentController.getComment);
router.get('/comm/:ID',commentController.getdetailCom);
router.get('/comdele/:ID',commentController.getdeleCom);
router.post('/com/:ID',commentController.postCom);

module.exports = router;