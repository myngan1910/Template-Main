const express = require('express')
const app = express()
const shopModel = require('../../model/adminModel/shop.js')
const serviceModel = require('../../model/adminModel/service.js')
const socialModel = require('../../model/adminModel/social.js')
const productModel = require('../../model/adminModel/product.js')

module.exports = {
    getLogin: async(req,res) => {
       const userid = parseInt(req.session.userId)
       const shop = await shopModel.getShopInfo();
       const service = await serviceModel.getService();
       const social = await socialModel.getSocial();
       var cart 
       if(userid > 1){
        cart = await  productModel.getCart(userid)

       }
        res.render('login', {shop:shop,service:service,social:social, cart: cart})

    },
   
}