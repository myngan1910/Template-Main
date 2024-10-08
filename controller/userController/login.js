const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const serviceModel = require('../../model/adminModel/service.js')
const socialModel = require('../../model/adminModel/social.js')
const productModel = require('../../model/adminModel/product.js')
const loginModel = require('../../model/adminModel/loginModel.js')
const  bcrypt = require('bcrypt')


module.exports = {
    getLogin: async(req,res) => {
       const userid = parseInt(req.session.userId)
       const shop = await shopModel.getShopInfo();
       const service = await serviceModel.getService();
       const social = await socialModel.getSocial();
       let cart
       let account = 0;
       if( userid >= 0) {
            cart = await productModel.getCart(userid);
           
       }
       if(cart != undefined){
           for (var i=0; i < cart.length; i++ ){
               account=account + parseInt(cart[i].product.price)* parseInt(cart[i].quanlity);
              

           }
       }
        res.render('./dashboard/login', {shop:shop,service:service,social:social, cart: cart, account:account})

    },
    checkLogin: async(req, res, next) => {
        
        const mail = req.body.mail;
        const pass1 = req.body.pass;
        const pass = bcrypt.hashSync(pass1,5)
        const user = await loginModel.checkLogin(mail)

        const checkpass = await bcrypt.compare(pass1,user[0].pass)
        
      if(user.length != 0  && checkpass){
        req.session.userId = user[0].id;
        res.redirect('/');
      } else{
        res.redirect('/login')
      }
}  ,
   
}