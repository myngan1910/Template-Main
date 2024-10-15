const express = require('express')
const router = express.Router();
const proController = require('../../controller/adminController/promotion.js')
const requireName = require('../../middleware/admin/promotion.js')

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

router.get('/promo', proController.getPro)
router.get('/create-promo', proController.getCreatePro)
router.post('/createpromo',upload.single('image'),requireName.checkName, proController.postCreatePro)
router.get('/promo/:ID', proController.getDetailPro)
router.get('/promodele/:ID',proController.getDeletePro)
router.post('/promo/:ID', upload.single('image'),proController.postGetPro)

module.exports =  router;