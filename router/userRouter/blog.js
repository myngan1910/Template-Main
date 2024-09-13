const express = require('express')
const router = express.Router()
const blogController = require('../../controller/userController/blog.js')
router.get('/',blogController.getblog);

module.exports= router;
