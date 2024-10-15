const express = require('express')
const router = express.Router();
const roleController = require('../../controller/adminController/role.js')
const requireName = require('../../middleware/admin/role.js')
router.get('/role',roleController.getRole);
router.get('/create-role',roleController.getCreateRole);
router.post('/createrole',requireName.checkName, roleController.postCreateRole);
router.get('/ro/:ID',roleController.getdetailRole);
router.get('/rodele/:ID',roleController.getdeleRole);
router.post('/rol/:ID', roleController.postRole);

module.exports = router;