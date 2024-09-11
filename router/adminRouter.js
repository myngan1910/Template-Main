const express = require('express')
const router = express.Router();
const adminController = require('../controller/adminController.js')
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

router.get('/', adminController.getAdmin)

//SHOP
router.get('/shop', adminController.getShopInfo)
router.get('/create-shop', adminController.getCreateShop)
router.post('/createshop',upload.single('logo'), adminController.postCreateShop)
router.get('/shopp/:ID', adminController.getDetailShop)
router.get('/shopdele/:ID', adminController.getDeleteShop)
router.post('/sho/:ID', upload.single('logo'),adminController.postGetShop)

//SOCIAL
router.get('/social', adminController.getSocial)
router.get('/create-so',  adminController.getCreateSocial)
router.post('/createsocial', adminController.postCreSocial);
router.get('/so/:ID',adminController.getdetailSocial);
router.get('/socialdele/:ID',adminController.getdeleSocial);
router.post('/ss/:ID', adminController.postSocial);

//ROLE
router.get('/role',adminController.getRole);
router.get('/create-role',adminController.getCreateRole);
router.post('/createrole', adminController.postCreateRole);
router.get('/ro/:ID',adminController.getdetailRole);
router.get('/rodele/:ID',adminController.getdeleRole);
router.post('/rol/:ID',adminController.postRole);


//SERVICE
router.get('/service', adminController.getService)
router.get('/create-service', adminController.getCreateService)
router.post('/createser',upload.single('icon'), adminController.postCreateService)
router.get('/ser/:ID', adminController.getDetailService)
router.get('/serdele/:ID', adminController.getDeleteService)
router.post('/service/:ID', upload.single('icon'),adminController.postGetService)

//CONTACT

router.get('/contact',adminController.getCtc);
router.post('/createContact',adminController.postCreateCtc);
router.get('/ctc/:ID',adminController.getdetailCtc);
router.get('/ctcdele/:ID',adminController.getdeleCtc);
router.post('/cont/:ID', adminController.postCtc);

/// CATEGORIES
router.get('/categories',adminController.getCate);
router.get('/create-cate',adminController.getCreateCate);
router.post('/createcate', adminController.postCreateCate);
router.get('/ca/:ID',adminController.getdetailCate);
router.get('/catedele/:ID',adminController.getdeleCate);
router.post('/catego/:ID',adminController.postCate);

/// TAGS
router.get('/tag',adminController.getTag);
router.get('/create-tag',adminController.getCreateTag);
router.post('/createtag', adminController.postCreateTag);
router.get('/tags/:ID',adminController.getdetailTag);
router.get('/tagdele/:ID',adminController.getdeleTag);
router.post('/tagg/:ID',adminController.postTag);


/// COLOR
router.get('/color',adminController.getColor);
router.get('/create-color',adminController.getCreateColor);
router.post('/createcolor', adminController.postCreateColor);
router.get('/co/:ID',adminController.getdetailColor);
router.get('/colordele/:ID',adminController.getdeleColor);
router.post('/color/:ID',adminController.postColor);


/// SIZE
router.get('/size',adminController.getSize);
router.get('/create-size',adminController.getCreateSize);
router.post('/createsize', adminController.postCreateSize);
router.get('/si/:ID',adminController.getdetailSize);
router.get('/sizedele/:ID',adminController.getdeleSize);
router.post('/size/:ID',adminController.postSize);

/// DISCOUNT
router.get('/discount',adminController.getDiscount);
router.get('/create-dis',adminController.getCreateDiscount);
router.post('/createdis', adminController.postCreateDiscount);
router.get('/diss/:ID',adminController.getdetailDiscount);
router.get('/disdele/:ID',adminController.getdeleDiscount);
router.post('/dis/:ID',adminController.postDiscount);

/// USER-CLASS
router.get('/user-class',adminController.getUser_class);
router.get('/create-class',adminController.getCreateUser_class);
router.post('/createclass', adminController.postCreateUser_class);
router.get('/class/:ID',adminController.getdetailUser_class);
router.get('/classdele/:ID',adminController.getdeleUser_class);
router.post('/classs/:ID',adminController.postUser_class);

//COMMENT
// router.get('/comment',viewController.getCom);

// router.get('/comm/:ID',viewController.getdetailCom);
// router.get('/comdele/:ID',viewController.getdeleCom);
// router.post('/com/:ID',viewController.postCom);

//PRODUCT
router.get('/product',adminController.getProduct);
router.get('/create-pro',adminController.getCreateProduct);
router.post('/createdpro', adminController.postCreateProduct);
router.get('/pro/:ID',adminController.getdetailProduct);
router.get('/prodele/:ID',adminController.getdeleProduct);
router.post('/pro/:ID',adminController.postProduct);

//BLOG
router.get('/blog',adminController.getBlog);
router.get('/create-blog',adminController.getCreateBlog);
router.post('/createblog',upload.single('image'), adminController.postCreateBlog);
router.get('/blogg/:ID',adminController.getdetailBlog);
router.get('/blogdele/:ID',adminController.getdeleBlog);
router.post('/blog/:ID',upload.single('image'),adminController.postBlog);

//ORDER
router.get('/order',adminController.getOrder);
router.get('/create-order',adminController.getCreateOrder);
router.post('/createod',adminController.postCreateOrder);
router.get('/od/:ID',adminController.getdetailOrder);
router.get('/orderdele/:ID',adminController.getdeleOrder);
router.post('/od/:ID',adminController.postOrder);

//IMG-PRODUCT
router.get('/img-pro',adminController.getImg);
router.get('/create-img',adminController.getCreateImg);
router.post('/createimg',adminController.postCreateImg);
router.get('/ima/:ID',adminController.getdetailImg);
router.get('/imgdele/:ID',adminController.getdeleImg);
router.post('/img/:ID',adminController.postImg);

//USER
router.get('/user',adminController.getUser);
router.get('/create-user',adminController.getCreateUser);
router.post('/createuser',upload.single('avata'),adminController.postCreateUser);
router.get('/use/:ID',adminController.getdetailUser);
router.get('/userdele/:ID',adminController.getdeleUser);
router.post('/user/:ID',upload.single('avata'), adminController.postUser);

//REVIEW
router.get('/review',adminController.getRev);
router.get('/create-rev',adminController.getCreateRev);
router.post('/createrev',adminController.postCreateRev);
router.get('/rev/:ID',adminController.getdetailRev);
router.get('/revdele/:ID',adminController.getdeleRev);
router.post('/rev/:ID',adminController.postRev);

module.exports = router;