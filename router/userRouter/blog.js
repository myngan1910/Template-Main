const express = require('express')
const router = express.Router()
const blogController = require('../../controller/userController/blog.js')
const commentController = require('../../controller/userController/blog.js')
const login = require('../../middleware/view/login.js')
const comment = require('../../middleware/view/comment.js')
router.get('/:ID',blogController.getblog);

router.get('/', blogController.getViewBlog)
router.get('/page/:ID', blogController.getViewBlog)
router.post('/comment/:ID',login.requireLogin, comment.requireComment,commentController.postCom)

module.exports= router;
