const express = require('express')
const router = express.Router();
const userController = require('../controller/userController.js')



router.get('/', userController.getEShop);
router.get('/cart', userController.getCart);
router.get('/blog',userController.getblog);
router.get('/contact',userController.getContact);
router.get('/checkout',userController.getCheck);
router.get('/product',userController.getProduct);
router.get('/login',userController.getLogin);


//REGISTER
router.get('/register',userController.getRegister);
router.post('/register', userController.postRegister)




module.exports = router;