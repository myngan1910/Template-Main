const express = require('express')
const router = express.Router();
const serviceController = require('../../controller/adminController/service.js')
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

router.get('/service', serviceController.getService)
router.get('/create-service', serviceController.getCreateService)
router.post('/createser',upload.single('icon'), serviceController.postCreateService)
router.get('/ser/:ID', serviceController.getDetailService)
router.get('/serdele/:ID', serviceController.getDeleteService)
router.post('/service/:ID', upload.single('icon'),serviceController.postGetService)

module.exports =  router;