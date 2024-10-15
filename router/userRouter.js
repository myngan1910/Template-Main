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
const profileRouter = require('../router/userRouter/profile.js')
const orderRouter = require('../router/userRouter/order.js')
const logoutRouter = require('../router/userRouter/logout.js')
const requireLogin = require('../middleware/view/login.js')
const likeRouter = require('../router/userRouter/likeproduct.js')

router.use('/', shopRouter);

router.use('/cart', cartRouter);
router.use('/blog',blogRouter);
router.use('/contact',contactRouter);
router.use('/checkout', requireLogin.requireLogin,checkoutRouter);
router.use('/product',productRouter);
router.use('/login',loginRouter);
router.use('/view',viewproductRouter);
router.use('/profile', requireLogin.requireLogin, profileRouter )
router.use('/order',requireLogin.requireLogin, orderRouter)
router.use('/logout', logoutRouter)
router.use('/like', likeRouter)

//REGISTER
router.use('/register',registerRouter);





module.exports = router;