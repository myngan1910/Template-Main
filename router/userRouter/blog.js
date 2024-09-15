const express = require('express')
const router = express.Router()
const blogController = require('../../controller/userController/blog.js')
const commentController = require('../../controller/adminController/comment.js')
const login = require('../../middleware/login.js')
const comment = require('../../middleware/comment.js')
router.get('/',blogController.getblog);
router.post('/comment/:ID',login.requireLogin, comment.requireComment,commentController.postCreateCom)

module.exports= router;
