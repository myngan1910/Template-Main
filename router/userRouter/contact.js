const express = require('express')
const router = express.Router();
const contactController = require('../../controller/userController/contact.js')

router.get('/',contactController.getContact);
module.exports= router;