const express = require('express')
const router = express.Router();
const contactController = require('../../controller/adminController/contact.js')



router.get('/',contactController.getCtc);
router.post('/createContact',contactController.postCreateCtc);
router.get('/ctc/:ID',contactController.getdetailCtc);
router.get('/ctcdele/:ID',contactController.getdeleCtc);
router.post('/cont/:ID', contactController.postCtc);

module.exports=router;