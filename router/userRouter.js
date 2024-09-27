const express = require('express')
const router = express.Router();

const shopRouter = require('../router/userRouter/shop.js')
const cartRouter = require('../router/userRouter/cart.js')
const blogRouter = require('../router/userRouter/blog.js')
const contactRouter = require('../router/userRouter/contact.js')
const checkoutRouter = require('../router/userRouter/checkout.js')
const productRouter = require('../router/userRouter/product.js')
const loginRouter = require('../router/userRouter/login.js')
const registerRouter = require('../router/userRouter/register.js')
const viewproductRouter = require('../router/userRouter/viewproduct.js')


router.use('/', shopRouter);

router.use('/cart', cartRouter);
router.use('/blog',blogRouter);
router.use('/contact',contactRouter);
router.use('/information',checkoutRouter);
router.use('/product',productRouter);
router.use('/login',loginRouter);
router.use('/view',viewproductRouter);


//REGISTER
router.use('/register',registerRouter);





module.exports = router;