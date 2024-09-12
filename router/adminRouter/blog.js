const express = require('express')
const router = express.Router();
const blogController = require('../../controller/adminController/blog.js')
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

router.get('/blog',blogController.getBlog);
router.get('/create-blog',blogController.getCreateBlog);
router.post('/createblog',upload.single('image'), blogController.postCreateBlog);
router.get('/blogg/:ID',blogController.getdetailBlog);
router.get('/blogdele/:ID',blogController.getdeleBlog);
router.post('/blog/:ID',upload.single('image'),blogController.postBlog);

module.exports = router;