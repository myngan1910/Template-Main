const express = require('express')
const router = express.Router();
const shopController = require('../../controller/adminController/shop.js')
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

router.get('/',shopController.getShopInfo)
router.get('/create-shop', shopController.getCreateShop)
router.post('/createshop',upload.single('logo'), shopController.postCreateShop)
router.get('/shopp/:ID', shopController.getDetailShop)
router.get('/shopdele/:ID', shopController.getDeleteShop)
router.post('/sho/:ID', upload.single('logo'),shopController.postGetShop)

module.exports = router;