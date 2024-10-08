const express = require('express')
const router = express.Router();
const profileController = require('../../controller/userController/checkout.js')
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

router.get('/', profileController.getProfile)
router.post('/',upload.single('avata'), profileController.postProfile)

module.exports = router;