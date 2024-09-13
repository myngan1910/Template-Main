const express = require('express')
const router = express.Router();
const userController = require('../../controller/adminController/user.js')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './profile/assets/uploads')
  },
  filename: function (req, file, cb) {
    const suffix = file.mimetype.split('/');
    cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
  }
})

const upload = multer({ storage: storage })


router.get('/user',userController.getUser);
router.get('/create-user',userController.getCreateUser);
router.post('/createuser',upload.single('avata'),userController.postCreateUser);
router.get('/use/:ID',userController.getdetailUser);
router.get('/userdele/:ID',userController.getdeleUser);
router.post('/user/:ID',upload.single('avata'), userController.postUser);

module.exports = router;