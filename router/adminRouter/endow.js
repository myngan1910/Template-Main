const express = require('express')
const router = express.Router();
const endowController = require('../../controller/adminController/endow.js')
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

router.get('/endow', endowController.getEndow)
router.get('/create-endow', endowController.getCreateEndow)
router.post('/createendow',upload.single('image'), endowController.postCreateEndow)
router.get('/en/:ID', endowController.getDetailEndow)
router.get('/endele/:ID', endowController.getDeleteEndow)
router.post('/endow/:ID', upload.single('image'),endowController.postGetEndow)

module.exports =  router;