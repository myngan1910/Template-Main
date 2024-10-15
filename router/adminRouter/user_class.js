const express = require('express')
const router = express.Router();
const user_classController = require('../../controller/adminController/user_class.js')
const requireName = require('../../middleware/admin/user-class.js')


router.get('/user-class',user_classController.getUser_class);
router.get('/create-class',user_classController.getCreateUser_class);
router.post('/createclass', requireName.checkName,user_classController.postCreateUser_class);
router.get('/class/:ID',user_classController.getdetailUser_class);
router.get('/classdele/:ID',user_classController.getdeleUser_class);
router.post('/classs/:ID',user_classController.postUser_class);

module.exports = router;