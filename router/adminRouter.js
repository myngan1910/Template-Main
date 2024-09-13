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
router.use('/', productRouter)
router.use('/', shopRouter)
router.use('/',userRouter);
router.use('/', socialRouter)
router.use('/',roleRouter);
router.use('/', serviceRouter)
router.use('/',contactRouter)
router.use('/',cateRouter);
router.use('/',tagRouter);
router.use('/',colorRouter);
router.use('/',sizeRouter);
router.use('/',disRouter);
router.use('/',user_classRouter);
router.use('/',blogRouter);
router.use('/',orderRouter);
router.use('/',img_proRouter);

router.use('/',reviewRouter);





// //COMMENT
// // router.get('/comment',viewController.getCom);

// // router.get('/comm/:ID',viewController.getdetailCom);
// // router.get('/comdele/:ID',viewController.getdeleCom);
// // router.post('/com/:ID',viewController.postCom);













module.exports = router;