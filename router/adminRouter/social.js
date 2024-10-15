const express = require('express')
const router = express.Router();
const socialController = require('../../controller/adminController/social.js')
const requireName = require('../../middleware/admin/social.js')

router.get('/social', socialController.getSocial)
router.get('/create-so',  socialController.getCreateSocial)
router.post('/createsocial',requireName.checkName, socialController.postCreSocial);
router.get('/so/:ID',socialController.getdetailSocial);
router.get('/socialdele/:ID',socialController.getdeleSocial);
router.post('/ss/:ID', socialController.postSocial);

module.exports = router;