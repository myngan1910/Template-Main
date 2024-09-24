const express = require('express')
const router = express.Router();
const img_proController = require('../../controller/adminController/img_pro.js')

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


router.get('/img-pro',img_proController.getImg);
router.get('/create-img',img_proController.getCreateImg);
router.post('/createimg',upload.array('image',4),img_proController.postCreateImg);
router.get('/ima/:ID',img_proController.getdetailImg);
router.get('/imgdele/:ID',img_proController.getdeleImg);
router.post('/img/:ID',upload.array('image', 4),img_proController.postImg);

module.exports = router;