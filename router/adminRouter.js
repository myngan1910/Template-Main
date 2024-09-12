const express = require('express')
const router = express.Router();
const adminController = require('../controller/adminController.js')
const productRouter = require('../router/adminRouter/product.js')
const shopRouter = require('../router/adminRouter/shopif.js')
const userRouter = require('../router/adminRouter/user.js')
const socialRouter = require('../router/adminRouter/social.js')
const roleRouter = require('../router/adminRouter/role.js')
const contactRouter = require('../router/adminRouter/contact.js')
const serviceRouter = require('../router/adminRouter/service.js')
const cateRouter =  require('../router/adminRouter/cate.js')
const tagRouter = require('../router/adminRouter/tag.js')
const colorRouter = require('../router/adminRouter/color.js')
const sizeRouter = require('../router/adminRouter/size.js')
const disRouter = require('../router/adminRouter/discount.js')
const user_classRouter = require('../router/adminRouter/user_class.js')
const blogRouter = require('../router/adminRouter/blog.js')
const orderRouter = require('../router/adminRouter/order.js')
const img_proRouter = require('../router/adminRouter/img_product.js')
const reviewRouter = require('../router/adminRouter/review.js')


router.get('/', adminController.getAdmin)
router.use('/product', productRouter)
router.use('/shop', shopRouter)
router.use('/user',userRouter);
router.use('/social', socialRouter)
router.use('/role',roleRouter);
router.use('/service', serviceRouter)
router.use('/contact',contactRouter)
router.use('/categories',cateRouter);
router.use('/tag',tagRouter);
router.use('/color',colorRouter);
router.use('/size',sizeRouter);
router.use('/discount',disRouter);
router.use('/user-class',user_classRouter);
router.use('/blog',blogRouter);
router.use('/order',orderRouter);
router.use('/img-pro',img_proRouter);

router.use('/review',reviewRouter);





// //COMMENT
// // router.get('/comment',viewController.getCom);

// // router.get('/comm/:ID',viewController.getdetailCom);
// // router.get('/comdele/:ID',viewController.getdeleCom);
// // router.post('/com/:ID',viewController.postCom);













module.exports = router;