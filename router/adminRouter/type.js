const express = require('express')
const router = express.Router();
const typerController = require('../../controller/adminController/typer.js')
const requireName = require('../../middleware/admin/typer.js')


router.get('/typer',typerController.getTyper);
router.get('/create-type',typerController.getCreateTyper);
router.post('/createtype', requireName.checkName,typerController.postCreateTyper);
router.get('/type/:ID',typerController.getdetailTyper);
router.get('/typedele/:ID',typerController.getdeleTyper);
router.post('/typ/:ID',typerController.postTyper);
module.exports = router;